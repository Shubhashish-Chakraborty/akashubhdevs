"use client";

import { useEffect, useRef, useCallback } from "react";

// ─── Constants ───────────────────────────────────────────────────────────────
const GAP = 2;           // px between sample points — smaller = more accurate
const MOUSE_RADIUS = 45;
const REPEL_MAG = 12;
const DAMPING = 0.86;
const EASE_MIN = 0.04;
const EASE_RANGE = 0.03;

// ─── Particle ────────────────────────────────────────────────────────────────
class Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx = 0;
  vy = 0;

  r: number;
  g: number;
  b: number;
  /** Normalised [0‥1] alpha from the source pixel */
  alpha: number;

  ease: number;
  delay: number;

  constructor(
    sx: number,
    sy: number,
    tx: number,
    ty: number,
    r: number,
    g: number,
    b: number,
    alpha: number,
    delay: number
  ) {
    this.x = sx;
    this.y = sy;
    this.targetX = tx;
    this.targetY = ty;
    this.r = r;
    this.g = g;
    this.b = b;
    this.alpha = alpha;
    this.ease = EASE_MIN + Math.random() * EASE_RANGE;
    this.delay = delay;
  }

  update(mx: number, my: number, hovered: boolean, frame: number) {
    if (frame < this.delay) return;

    let fx = 0;
    let fy = 0;

    if (hovered) {
      const dx = this.x - mx;
      const dy = this.y - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_RADIUS && dist > 0) {
        const strength = Math.pow((MOUSE_RADIUS - dist) / MOUSE_RADIUS, 2);
        fx = (dx / dist) * strength * REPEL_MAG;
        fy = (dy / dist) * strength * REPEL_MAG;
      }
    }

    // Spring back to target
    fx += (this.targetX - this.x) * this.ease;
    fy += (this.targetY - this.y) * this.ease;

    this.vx = (this.vx + fx) * DAMPING;
    this.vy = (this.vy + fy) * DAMPING;
    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx: CanvasRenderingContext2D, frame: number) {
    if (frame < this.delay) return;

    // Fade in over 20 frames after delay
    const fadeIn = Math.min(1, (frame - this.delay) / 20);
    const a = fadeIn * this.alpha;

    ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${a})`;
    // Use exact gap-sized squares so pixels tile perfectly when assembled
    ctx.fillRect(this.x - GAP / 2, this.y - GAP / 2, GAP, GAP);
  }
}

// ─── Component ───────────────────────────────────────────────────────────────
interface ParticleFaceProps {
  imageSrc?: string;
  size?: number;
}

export default function ParticleFace({
  imageSrc = "/me4.png",
  size = 320,
}: ParticleFaceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const hoveredRef = useRef(false);
  const animRef = useRef<number>(0);
  const frameRef = useRef(0);

  // ── Build particles from image ────────────────────────────────────────────
  const buildParticles = useCallback((W: number, H: number, img?: HTMLImageElement) => {
    const list: Particle[] = [];

    if (img) {
      // Draw image into an offscreen canvas at full canvas resolution,
      // clipped to a circle.
      const off = document.createElement("canvas");
      off.width = W;
      off.height = H;
      const octx = off.getContext("2d")!;

      // Circular clip
      octx.beginPath();
      octx.arc(W / 2, H / 2, Math.min(W, H) / 2, 0, Math.PI * 2);
      octx.clip();

      // Draw image to fill the entire canvas (preserving aspect ratio via cover)
      const imgAspect = img.naturalWidth / img.naturalHeight;
      const canAspect = W / H;
      let dw: number, dh: number, dx: number, dy: number;
      if (imgAspect > canAspect) {
        // Image is wider — fit height, center width
        dh = H;
        dw = H * imgAspect;
        dx = (W - dw) / 2;
        dy = 0;
      } else {
        // Image is taller — fit width, center height
        dw = W;
        dh = W / imgAspect;
        dx = 0;
        dy = (H - dh) / 2;
      }
      octx.drawImage(img, dx, dy, dw, dh);

      const { data } = octx.getImageData(0, 0, W, H);

      for (let py = 0; py < H; py += GAP) {
        for (let px = 0; px < W; px += GAP) {
          const i = (py * W + px) * 4;
          const a = data[i + 3];
          if (a < 30) continue;         // fully transparent — skip

          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Spawn from a random edge
          const edge = Math.random();
          let sx: number, sy: number;
          if (edge < 0.25) { sx = Math.random() * W; sy = -20; }
          else if (edge < 0.50) { sx = W + 20; sy = Math.random() * H; }
          else if (edge < 0.75) { sx = Math.random() * W; sy = H + 20; }
          else { sx = -20; sy = Math.random() * H; }

          // Particles closer to centre assemble earlier
          const distFromCentre = Math.hypot(px - W / 2, py - H / 2);
          const maxDist = Math.min(W, H) / 2;
          const delay = Math.floor((distFromCentre / maxDist) * 40 + Math.random() * 20);

          list.push(new Particle(sx, sy, px, py, r, g, b, a / 255, delay));
        }
      }
    }

    particles.current = list;
  }, []);

  // ── Main effect ──────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    canvas.width = size;
    canvas.height = size;
    frameRef.current = 0;

    // Load image
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;
    img.onload = () => buildParticles(size, size, img);
    img.onerror = () => buildParticles(size, size, undefined);

    // Animation loop
    const tick = () => {
      frameRef.current++;
      const f = frameRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const hov = hoveredRef.current;

      ctx.clearRect(0, 0, size, size);

      for (const p of particles.current) {
        p.update(mx, my, hov, f);
        p.draw(ctx, f);
      }

      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);

    // Mouse events
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = size / rect.width;
      const scaleY = size / rect.height;
      mouseRef.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    };
    const onEnter = () => { hoveredRef.current = true; };
    const onLeave = () => {
      hoveredRef.current = false;
      mouseRef.current = { x: -9999, y: -9999 };
    };

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseenter", onEnter);
    canvas.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseenter", onEnter);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [imageSrc, size, buildParticles]);

  return (
    <div className="relative select-none" style={{ width: size, height: size }}>
      <canvas
        ref={canvasRef}
        className="cursor-pointer"
        style={{ width: size, height: size }}
      />
    </div>
  );
}
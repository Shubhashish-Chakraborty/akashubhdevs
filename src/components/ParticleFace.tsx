"use client";

import { useEffect, useRef, useCallback } from "react";

// ─── Particle class ─────────────────────────────────────────────────────────
class Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number = 0;
  vy: number = 0;
  r: number;
  g: number;
  b: number;
  size: number;
  ease: number;
  assembled: boolean = false;
  delay: number;

  constructor(
    startX: number,
    startY: number,
    targetX: number,
    targetY: number,
    r: number,
    g: number,
    b: number,
    delay: number
  ) {
    this.x = startX;
    this.y = startY;
    this.targetX = targetX;
    this.targetY = targetY;
    this.r = r;
    this.g = g;
    this.b = b;
    this.size = Math.random() * 1.2 + 0.8;
    this.ease = Math.random() * 0.04 + 0.035;
    this.delay = delay;
  }

  update(
    mx: number,
    my: number,
    hovered: boolean,
    frame: number,
    mouseRadius: number
  ) {
    if (frame < this.delay) return;

    let forceX = 0;
    let forceY = 0;

    if (hovered) {
      const dx = this.x - mx;
      const dy = this.y - my;
      const distSq = dx * dx + dy * dy;
      const dist = Math.sqrt(distSq);

      if (dist < mouseRadius) {
        const force = Math.pow((mouseRadius - dist) / mouseRadius, 2);
        const mag = force * 18;
        forceX += (dx / (dist || 1)) * mag;
        forceY += (dy / (dist || 1)) * mag;
      }
    }

    const springX = (this.targetX - this.x) * this.ease;
    const springY = (this.targetY - this.y) * this.ease;

    this.vx = (this.vx + forceX + springX) * 0.86;
    this.vy = (this.vy + forceY + springY) * 0.86;

    this.x += this.vx;
    this.y += this.vy;

    const distToTarget = Math.hypot(
      this.x - this.targetX,
      this.y - this.targetY
    );
    if (distToTarget < 1) this.assembled = true;
  }

  draw(ctx: CanvasRenderingContext2D, frame: number) {
    if (frame < this.delay) return;
    const alpha = Math.min(1, (frame - this.delay) / 30);
    ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${alpha * 0.92})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// ─── Component ──────────────────────────────────────────────────────────────
interface ParticleFaceProps {
  imageSrc?: string;
  size?: number;
}

export default function ParticleFace({
  imageSrc = "/me.png",
  size = 320,
}: ParticleFaceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const hoveredRef = useRef(false);
  const animRef = useRef<number>(0);
  const frameRef = useRef(0);
  const MOUSE_RADIUS = 70;

  const buildParticles = useCallback(
    (W: number, H: number, imgEl?: HTMLImageElement) => {
      const particles: Particle[] = [];
      const sampleSize = Math.min(W, H) - 10;
      const offsetX = (W - sampleSize) / 2;
      const offsetY = (H - sampleSize) / 2;

      if (imgEl) {
        const off = document.createElement("canvas");
        off.width = sampleSize;
        off.height = sampleSize;
        const offCtx = off.getContext("2d")!;

        offCtx.beginPath();
        offCtx.arc(
          sampleSize / 2,
          sampleSize / 2,
          sampleSize / 2,
          0,
          Math.PI * 2
        );
        offCtx.clip();
        offCtx.drawImage(imgEl, 0, 0, sampleSize, sampleSize);

        const data = offCtx.getImageData(0, 0, sampleSize, sampleSize).data;
        const gap = 3;

        for (let y = 0; y < sampleSize; y += gap) {
          for (let x = 0; x < sampleSize; x += gap) {
            const i = (y * sampleSize + x) * 4;
            const a = data[i + 3];
            if (a < 80) continue;

            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const brightness = (r + g + b) / 3;
            if (brightness < 10) continue;

            const tx = x + offsetX;
            const ty = y + offsetY;

            const edge = Math.random();
            let sx: number, sy: number;
            if (edge < 0.25) {
              sx = Math.random() * W;
              sy = -20;
            } else if (edge < 0.5) {
              sx = W + 20;
              sy = Math.random() * H;
            } else if (edge < 0.75) {
              sx = Math.random() * W;
              sy = H + 20;
            } else {
              sx = -20;
              sy = Math.random() * H;
            }

            const dist = Math.hypot(tx - W / 2, ty - H / 2);
            const delay = Math.floor(
              (dist / (sampleSize / 2)) * 50 + Math.random() * 25
            );

            particles.push(new Particle(sx, sy, tx, ty, r, g, b, delay));
          }
        }
      } else {
        const cx = W / 2;
        const cy = H / 2;
        const R = sampleSize / 2;

        for (let y = -R; y < R; y += 4) {
          for (let x = -R; x < R; x += 4) {
            const dist = Math.sqrt(x * x + y * y);
            if (dist > R) continue;

            const t = dist / R;
            const r = Math.round(169 + (212 - 169) * t);
            const g = Math.round(182 + (190 - 182) * t);
            const b = Math.round(101 + (98 - 101) * t);

            const tx = cx + x;
            const ty = cy + y;
            const delay = Math.floor(
              (dist / R) * 50 + Math.random() * 20
            );

            const sx = Math.random() * W;
            const sy = Math.random() * H;

            particles.push(new Particle(sx, sy, tx, ty, r, g, b, delay));
          }
        }
      }

      particlesRef.current = particles;
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    canvas.width = size;
    canvas.height = size;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;
    img.onload = () => buildParticles(size, size, img);
    img.onerror = () => buildParticles(size, size, undefined);

    const tick = () => {
      frameRef.current++;
      const f = frameRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const hov = hoveredRef.current;

      ctx.clearRect(0, 0, size, size);

      for (const p of particlesRef.current) {
        p.update(mx, my, hov, f, MOUSE_RADIUS);
        p.draw(ctx, f);
      }

      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = size / rect.width;
      const scaleY = size / rect.height;
      mouseRef.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    };
    const onEnter = () => {
      hoveredRef.current = true;
    };
    const onLeave = () => {
      hoveredRef.current = false;
      mouseRef.current = { x: -9999, y: -9999 };
    };

    // const onClick = () => {
    //   for (const p of particlesRef.current) {
    //     p.x = Math.random() * size;
    //     p.y = Math.random() * size;
    //     p.vx = (Math.random() - 0.5) * 15;
    //     p.vy = (Math.random() - 0.5) * 15;
    //     p.assembled = false;
    //     p.delay = Math.floor(Math.random() * 20);
    //   }
    // };

    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseenter", onEnter);
    canvas.addEventListener("mouseleave", onLeave);
    // canvas.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseenter", onEnter);
      canvas.removeEventListener("mouseleave", onLeave);
      // canvas.removeEventListener("click", onClick);
    };
  }, [imageSrc, size, buildParticles]);

  return (
    <div
      className="relative select-none"
      style={{ width: size, height: size }}
    >
      <canvas
        ref={canvasRef}
        className="cursor-pointer"
        style={{ width: size, height: size }}
      />
    </div>
  );
}

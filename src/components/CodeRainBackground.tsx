"use client";

import { useEffect, useRef } from "react";

export default function CodeRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let columns: number[] = [];
    let columnCount = 0;

    const CHARS = "{}[]()<>=/;:.,|&!~^%?#@abcdefghijklmnopqrstuvwxyz0123456789+-*const let var function return import export async await if else for while class new this true false null undefined console.log npm git push pull commit deploy build test run dev prod docker node react next tsx jsx css html";
    const charArr = CHARS.split("");
    const FONT_SIZE = 14;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      columnCount = Math.floor(canvas.width / FONT_SIZE);
      columns = Array.from({ length: columnCount }, () =>
        Math.floor(Math.random() * canvas.height / FONT_SIZE)
      );
    };

    const draw = () => {
      // Semi-transparent overlay to create trail effect
      ctx.fillStyle = "rgba(13, 14, 15, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < columnCount; i++) {
        const char = charArr[Math.floor(Math.random() * charArr.length)];
        const x = i * FONT_SIZE;
        const y = columns[i] * FONT_SIZE;

        // Vary colors — mostly dim greens/yellows matching gruvbox
        const colorRoll = Math.random();
        if (colorRoll < 0.03) {
          // Bright head character
          ctx.fillStyle = "rgba(169, 182, 101, 0.35)";
        } else if (colorRoll < 0.06) {
          ctx.fillStyle = "rgba(216, 166, 87, 0.12)";
        } else if (colorRoll < 0.09) {
          ctx.fillStyle = "rgba(137, 180, 130, 0.10)";
        } else {
          ctx.fillStyle = "rgba(169, 182, 101, 0.06)";
        }

        ctx.fillText(char, x, y);

        // Reset column when it goes off screen
        if (y > canvas.height && Math.random() > 0.975) {
          columns[i] = 0;
        }
        columns[i]++;
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);

    // Initial fill with background color
    ctx.fillStyle = "#0d0e0f";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}

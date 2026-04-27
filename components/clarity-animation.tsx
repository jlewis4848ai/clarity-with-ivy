"use client";
import { useEffect, useRef } from "react";

export default function ClarityAnimation({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;

    const bigFont   = `bold 96px 'DM Serif Display', Georgia, serif`;
    const smallFont = `400 52px 'DM Serif Display', Georgia, serif`;

    const mc = document.createElement("canvas").getContext("2d")!;
    mc.font = bigFont;
    const w1 = mc.measureText("Clarity").width;
    mc.font = smallFont;
    const w2 = mc.measureText("with").width;
    mc.font = bigFont;
    const w3 = mc.measureText("Ivy").width;

    const gap = 22;
    const total = w1 + gap + w2 + gap + w3;
    const x1 = (W - total) / 2;
    const x2 = x1 + w1 + gap;
    const x3 = x2 + w2 + gap;
    const cy = H / 2 + 6;

    function sampleWord(text: string, font: string, ox: number, oy: number) {
      const oc = document.createElement("canvas");
      oc.width = W; oc.height = H;
      const o = oc.getContext("2d")!;
      o.font = font; o.textAlign = "left"; o.textBaseline = "middle";
      o.fillStyle = "#fff";
      o.fillText(text, ox, oy);
      const { data } = o.getImageData(0, 0, W, H);
      const pts: [number, number][] = [];
      for (let y = 0; y < H; y += 5)
        for (let x = 0; x < W; x += 5)
          if (data[(y * W + x) * 4 + 3] > 100) pts.push([x, y]);
      return pts;
    }

    function thin(arr: [number, number][], max: number) {
      if (arr.length <= max) return arr;
      const skip = Math.ceil(arr.length / max);
      return arr.filter((_, i) => i % skip === 0).slice(0, max);
    }

    const raw1 = thin(sampleWord("Clarity", bigFont,   x1, cy),      420);
    const raw2 = thin(sampleWord("with",    smallFont,  x2, cy + 10), 200);
    const raw3 = thin(sampleWord("Ivy",     bigFont,    x3, cy),      320);

    interface Particle {
      x: number; y: number;
      tx: number; ty: number;
      ox: number; oy: number;
      vx: number; vy: number;
      size: number;
      alpha: number;
      word: 0 | 1 | 2;
    }

    function build(targets: [number, number][], word: 0 | 1 | 2): Particle[] {
      return targets.map(([tx, ty]) => {
        const ox = word === 0 ? Math.random() * W * 0.4
                 : word === 1 ? W * 0.3 + Math.random() * W * 0.4
                 :              W * 0.6 + Math.random() * W * 0.4;
        const oy = Math.random() * H;
        return {
          x: ox, y: oy, tx, ty, ox, oy,
          vx: (Math.random() - 0.5) * 0.55,
          vy: (Math.random() - 0.5) * 0.55,
          size: 0.9 + Math.random() * 1.5,
          alpha: 0.1 + Math.random() * 0.2,
          word,
        };
      });
    }

    const particles: Particle[] = [
      ...build(raw1, 0),
      ...build(raw2, 1),
      ...build(raw3, 2),
    ];

    const STAGES = [60, 95, 75, 85, 130, 90];
    const TOTAL  = STAGES.reduce((a, b) => a + b, 0);

    let frame = 0;
    let rafId: number;

    function getStage(f: number): [number, number] {
      let acc = 0;
      for (let i = 0; i < STAGES.length; i++) {
        if (f < acc + STAGES[i]) return [i, (f - acc) / STAGES[i]];
        acc += STAGES[i];
      }
      return [STAGES.length - 1, 1];
    }

    function eio(t: number) { return t < 0.5 ? 2*t*t : -1 + (4-2*t)*t; }

    const COLORS: [number,number,number][] = [
      [245, 250, 255],
      [56,  189, 248],
      [220, 240, 255],
    ];

    function drift(p: Particle) {
      p.vx += (Math.random() - 0.5) * 0.08;
      p.vy += (Math.random() - 0.5) * 0.08;
      p.vx *= 0.97; p.vy *= 0.97;
      p.x = Math.max(0, Math.min(W, p.x + p.vx));
      p.y = Math.max(0, Math.min(H, p.y + p.vy));
    }

    function tick() {
      ctx.clearRect(0, 0, W, H);
      const f = frame % TOTAL;
      const [stage, t] = getStage(f);
      const et = eio(t);

      for (const p of particles) {
        const wi = p.word;
        let targetAlpha: number;

        if (stage === 0) {
          drift(p);
          targetAlpha = 0.18;
        } else if (stage === 5) {
          p.x += (p.ox - p.x) * (0.025 + et * 0.055);
          p.y += (p.oy - p.y) * (0.025 + et * 0.055);
          targetAlpha = 0.18 - et * 0.14;
        } else {
          const forming = stage - 1;
          if (stage === 4 || wi < forming) {
            p.x += (p.tx - p.x) * 0.18;
            p.y += (p.ty - p.y) * 0.18;
            targetAlpha = stage === 4
              ? 0.8 + Math.sin(Date.now() * 0.0025 + p.tx * 0.04 + wi) * 0.2
              : 0.92;
          } else if (wi === forming) {
            const pull = 0.038 + et * 0.07;
            p.x += (p.tx - p.x) * pull;
            p.y += (p.ty - p.y) * pull;
            targetAlpha = 0.15 + et * 0.8;
          } else {
            drift(p);
            targetAlpha = 0.18;
          }
        }

        p.alpha += (Math.max(0, targetAlpha) - p.alpha) * 0.1;
        if (p.alpha < 0.01) continue;

        const [r, g, b] = COLORS[wi];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha.toFixed(2)})`;
        ctx.fill();

        if (p.alpha > 0.6) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${((p.alpha - 0.6) * 0.14).toFixed(3)})`;
          ctx.fill();
        }
      }

      frame++;
      rafId = requestAnimationFrame(tick);
    }

    tick();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={820}
      height={180}
      className={className}
      style={{ maxWidth: "100%", display: "block" }}
    />
  );
}

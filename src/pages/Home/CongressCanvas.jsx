import { useEffect, useRef } from 'react';

function drawCongress(canvas, total, rows, innerRadius) {
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.scale(dpr, dpr);

  const isSenate = total === 100;
  const dotR = isSenate ? 4.5 : 2.6;
  const gap = isSenate ? 14 : 8;
  const cx = w / 2;
  const cy = h - 8;

  // Distribute dots across arcs
  const spotsPerRow = [];
  let remaining = total;
  for (let i = 0; i < rows; i++) {
    const arcR = innerRadius + i * gap;
    const maxFit = Math.floor(Math.PI * arcR / (dotR * 2.6));
    const s = Math.min(maxFit, remaining);
    spotsPerRow.push(s);
    remaining -= s;
    if (remaining <= 0) break;
  }
  while (remaining > 0) {
    for (let i = spotsPerRow.length - 1; i >= 0 && remaining > 0; i--) {
      spotsPerRow[i]++;
      remaining--;
    }
  }

  const dots = [];
  for (let i = 0; i < spotsPerRow.length; i++) {
    const arcR = innerRadius + i * gap;
    const n = spotsPerRow[i];
    const padding = 0.08;
    const step = (Math.PI - 2 * padding) / (n - 1 || 1);
    for (let j = 0; j < n; j++) {
      const angle = Math.PI + padding + j * step;
      dots.push({
        x: cx + arcR * Math.cos(angle),
        y: cy + arcR * Math.sin(angle),
        bad: Math.random() < 0.72,
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 0.8,
      });
    }
  }

  let t = 0;
  let rafId;

  function animate() {
    ctx.clearRect(0, 0, w, h);
    t += 0.016;
    for (const dot of dots) {
      if (dot.bad) {
        const v = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * dot.speed * 2 + dot.phase));
        ctx.fillStyle = `rgba(232,80,62,${0.12 + v * 0.6})`;
        ctx.shadowColor = v > 0.55 ? `rgba(232,80,62,${v * 0.3})` : 'transparent';
        ctx.shadowBlur = v > 0.55 ? 7 : 0;
      } else {
        ctx.fillStyle = 'rgba(240,208,96,0.85)';
        ctx.shadowColor = 'rgba(240,208,96,0.15)';
        ctx.shadowBlur = 4;
      }
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dotR, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    rafId = requestAnimationFrame(animate);
  }

  animate();
  return () => cancelAnimationFrame(rafId);
}

export default function CongressCanvas() {
  const hRef = useRef(null);
  const sRef = useRef(null);

  useEffect(() => {
    if (!hRef.current || !sRef.current) return;

    let cancelH = drawCongress(hRef.current, 435, 22, 40);
    let cancelS = drawCongress(sRef.current, 100, 5, 45);

    const ro = new ResizeObserver(() => {
      cancelH();
      cancelS();
      cancelH = drawCongress(hRef.current, 435, 22, 40);
      cancelS = drawCongress(sRef.current, 100, 5, 45);
    });
    ro.observe(hRef.current);
    ro.observe(sRef.current);

    return () => {
      cancelH();
      cancelS();
      ro.disconnect();
    };
  }, []);

  return (
    <>
      <p className="clbl">House of Representatives &mdash; 435 Members</p>
      <canvas ref={hRef} style={{ width: '100%', maxWidth: '680px', display: 'block', margin: '.6rem auto', height: '200px' }} />
      <p className="clbl">United States Senate &mdash; 100 Members</p>
      <canvas ref={sRef} style={{ width: '100%', maxWidth: '680px', display: 'block', margin: '.6rem auto', height: '155px' }} />
    </>
  );
}

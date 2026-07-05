/* ============================================================
   EduVerse AI — Charts Module (Canvas-based, no dependencies)
   ============================================================ */

/* ── Color palette ── */
const COLORS = {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  cyan: '#06b6d4',
  green: '#10b981',
  orange: '#f59e0b',
  red: '#ef4444',
  pink: '#ec4899',
  text: '#94a3b8',
  grid: 'rgba(255,255,255,0.04)',
  bg: 'rgba(255,255,255,0.02)'
};

/* ── Helper: draw rounded rect ── */
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

/* ── Gradient helper ── */
function makeGrad(ctx, y0, y1, colorStop1, colorStop2) {
  const g = ctx.createLinearGradient(0, y0, 0, y1);
  g.addColorStop(0, colorStop1);
  g.addColorStop(1, colorStop2);
  return g;
}

/* ============================================================
   LINE CHART
   ============================================================ */
export function drawLineChart(canvasId, labels, datasets, opts = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  // Size
  const rect = canvas.parentElement.getBoundingClientRect();
  const W = rect.width || 600;
  const H = opts.height || 220;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  ctx.scale(dpr, dpr);

  const pad = { top: 20, right: 20, bottom: 40, left: 45 };
  const w = W - pad.left - pad.right;
  const h = H - pad.top - pad.bottom;

  ctx.clearRect(0, 0, W, H);

  // Max value
  const allVals = datasets.flatMap(d => d.data);
  const maxVal = Math.max(...allVals) * 1.1 || 100;

  const xStep = w / (labels.length - 1);
  const getY = v => pad.top + h - (v / maxVal) * h;
  const getX = i => pad.left + i * xStep;

  // Grid lines
  const gridLines = 5;
  ctx.strokeStyle = COLORS.grid;
  ctx.lineWidth = 1;
  for (let i = 0; i <= gridLines; i++) {
    const y = pad.top + (i / gridLines) * h;
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + w, y); ctx.stroke();

    const val = Math.round(maxVal * (1 - i / gridLines));
    ctx.fillStyle = COLORS.text;
    ctx.font = `10px Inter, sans-serif`;
    ctx.textAlign = 'right';
    ctx.fillText(val, pad.left - 6, y + 3);
  }

  // X labels
  ctx.textAlign = 'center';
  ctx.fillStyle = COLORS.text;
  ctx.font = '11px Inter, sans-serif';
  labels.forEach((l, i) => ctx.fillText(l, getX(i), H - 10));

  // Draw each dataset
  datasets.forEach(dataset => {
    const color = dataset.color || COLORS.primary;
    const pts = dataset.data.map((v, i) => ({ x: getX(i), y: getY(v) }));

    // Fill
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    pts.forEach((p, i) => {
      if (i === 0) return;
      const cp1x = pts[i-1].x + xStep * 0.4;
      const cp2x = p.x - xStep * 0.4;
      ctx.bezierCurveTo(cp1x, pts[i-1].y, cp2x, p.y, p.x, p.y);
    });
    ctx.lineTo(pts[pts.length-1].x, pad.top + h);
    ctx.lineTo(pts[0].x, pad.top + h);
    ctx.closePath();
    ctx.fillStyle = makeGrad(ctx, pad.top, pad.top + h, color + '28', color + '02');
    ctx.fill();
    ctx.restore();

    // Line
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    pts.forEach((p, i) => {
      if (i === 0) { ctx.moveTo(p.x, p.y); return; }
      const cp1x = pts[i-1].x + xStep * 0.4;
      const cp2x = p.x - xStep * 0.4;
      ctx.bezierCurveTo(cp1x, pts[i-1].y, cp2x, p.y, p.x, p.y);
    });
    ctx.stroke();

    // Dots
    pts.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = 'rgba(11,11,26,0.8)';
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  });

  // Legend
  if (datasets.length > 1) {
    let lx = pad.left;
    datasets.forEach(d => {
      ctx.fillStyle = d.color || COLORS.primary;
      ctx.fillRect(lx, 6, 12, 4);
      ctx.fillStyle = COLORS.text;
      ctx.font = '10px Inter, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(d.label, lx + 16, 12);
      lx += ctx.measureText(d.label).width + 36;
    });
  }
}

/* ============================================================
   BAR CHART
   ============================================================ */
export function drawBarChart(canvasId, labels, data, opts = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  const rect = canvas.parentElement.getBoundingClientRect();
  const W = rect.width || 600;
  const H = opts.height || 200;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  canvas.style.width = W + 'px';
  canvas.style.height = H + 'px';
  ctx.scale(dpr, dpr);

  const pad = { top: 20, right: 20, bottom: 40, left: 45 };
  const w = W - pad.left - pad.right;
  const h = H - pad.top - pad.bottom;

  ctx.clearRect(0, 0, W, H);

  const maxVal = Math.max(...data) * 1.15 || 100;
  const barW = (w / labels.length) * 0.55;
  const gap = (w / labels.length);

  // Grid
  for (let i = 0; i <= 4; i++) {
    const y = pad.top + (i / 4) * h;
    ctx.strokeStyle = COLORS.grid; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(pad.left + w, y); ctx.stroke();
    ctx.fillStyle = COLORS.text; ctx.font = '10px Inter'; ctx.textAlign = 'right';
    ctx.fillText(Math.round(maxVal * (1 - i / 4)), pad.left - 6, y + 3);
  }

  const colors = [COLORS.primary, COLORS.secondary, COLORS.cyan, COLORS.green, COLORS.orange, COLORS.pink, COLORS.red];

  data.forEach((v, i) => {
    const barH = (v / maxVal) * h;
    const x = pad.left + i * gap + (gap - barW) / 2;
    const y = pad.top + h - barH;
    const color = Array.isArray(opts.colors) ? opts.colors[i] : colors[i % colors.length];

    const g = makeGrad(ctx, y, y + barH, color, color + '88');
    ctx.fillStyle = g;
    roundRect(ctx, x, y, barW, barH, 4);
    ctx.fill();

    // Label
    ctx.fillStyle = COLORS.text; ctx.font = '11px Inter'; ctx.textAlign = 'center';
    ctx.fillText(labels[i], x + barW / 2, H - 10);
  });
}

/* ============================================================
   RADAR CHART (Skills)
   ============================================================ */
export function drawRadarChart(canvasId, labels, datasets, opts = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const SIZE = opts.size || 280;
  canvas.width = SIZE * dpr; canvas.height = SIZE * dpr;
  canvas.style.width = SIZE + 'px'; canvas.style.height = SIZE + 'px';
  ctx.scale(dpr, dpr);

  ctx.clearRect(0, 0, SIZE, SIZE);

  const cx = SIZE / 2, cy = SIZE / 2;
  const R = SIZE / 2 - 36;
  const n = labels.length;
  const angleStep = (Math.PI * 2) / n;
  const toAngle = i => -Math.PI / 2 + i * angleStep;

  // Grid webs
  [0.2, 0.4, 0.6, 0.8, 1.0].forEach(ratio => {
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const a = toAngle(i);
      const x = cx + Math.cos(a) * R * ratio;
      const y = cy + Math.sin(a) * R * ratio;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = COLORS.grid;
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // Spokes
  for (let i = 0; i < n; i++) {
    const a = toAngle(i);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R);
    ctx.strokeStyle = COLORS.grid; ctx.lineWidth = 1; ctx.stroke();
  }

  // Datasets
  datasets.forEach(dataset => {
    const color = dataset.color || COLORS.primary;
    ctx.beginPath();
    dataset.data.forEach((v, i) => {
      const a = toAngle(i);
      const r = (v / 100) * R;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = color + '20'; ctx.fill();
    ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.stroke();
  });

  // Labels
  ctx.font = 'bold 11px Inter, sans-serif';
  ctx.textAlign = 'center';
  for (let i = 0; i < n; i++) {
    const a = toAngle(i);
    const x = cx + Math.cos(a) * (R + 22);
    const y = cy + Math.sin(a) * (R + 22) + 4;
    ctx.fillStyle = COLORS.text;
    ctx.fillText(labels[i], x, y);
  }
}

/* ============================================================
   DONUT CHART
   ============================================================ */
export function drawDonutChart(canvasId, data, opts = {}) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const SIZE = opts.size || 180;
  canvas.width = SIZE * dpr; canvas.height = SIZE * dpr;
  canvas.style.width = SIZE + 'px'; canvas.style.height = SIZE + 'px';
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, SIZE, SIZE);

  const cx = SIZE / 2, cy = SIZE / 2;
  const R = SIZE / 2 - 12;
  const inner = R * 0.6;
  const total = data.reduce((s, d) => s + d.value, 0);
  let startAngle = -Math.PI / 2;

  data.forEach(d => {
    const sweep = (d.value / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(cx, cy, R, startAngle, startAngle + sweep);
    ctx.arc(cx, cy, inner, startAngle + sweep, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = d.color;
    ctx.fill();
    startAngle += sweep;
  });

  // Center text
  if (opts.centerText) {
    ctx.fillStyle = '#f1f5f9';
    ctx.font = `bold ${opts.centerFontSize || 22}px Inter`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(opts.centerText, cx, cy - 8);
    if (opts.centerLabel) {
      ctx.font = '11px Inter';
      ctx.fillStyle = COLORS.text;
      ctx.fillText(opts.centerLabel, cx, cy + 14);
    }
  }
}

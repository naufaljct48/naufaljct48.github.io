import { useEffect, useRef } from "react";

// In-car passenger information display: a real 5×7 bitmap LED face, one unlit
// column between characters. Static and centred when the message fits; otherwise
// it scrolls column by column (never under reduced motion).

const GLYPHS: Record<string, string> = {
  A: "01110 10001 10001 11111 10001 10001 10001",
  B: "11110 10001 10001 11110 10001 10001 11110",
  C: "01110 10001 10000 10000 10000 10001 01110",
  D: "11100 10010 10001 10001 10001 10010 11100",
  E: "11111 10000 10000 11110 10000 10000 11111",
  F: "11111 10000 10000 11110 10000 10000 10000",
  G: "01110 10001 10000 10111 10001 10001 01111",
  H: "10001 10001 10001 11111 10001 10001 10001",
  I: "01110 00100 00100 00100 00100 00100 01110",
  J: "00111 00010 00010 00010 00010 10010 01100",
  K: "10001 10010 10100 11000 10100 10010 10001",
  L: "10000 10000 10000 10000 10000 10000 11111",
  M: "10001 11011 10101 10101 10001 10001 10001",
  N: "10001 10001 11001 10101 10011 10001 10001",
  O: "01110 10001 10001 10001 10001 10001 01110",
  P: "11110 10001 10001 11110 10000 10000 10000",
  Q: "01110 10001 10001 10001 10101 10010 01101",
  R: "11110 10001 10001 11110 10100 10010 10001",
  S: "01111 10000 10000 01110 00001 00001 11110",
  T: "11111 00100 00100 00100 00100 00100 00100",
  U: "10001 10001 10001 10001 10001 10001 01110",
  V: "10001 10001 10001 10001 10001 01010 00100",
  W: "10001 10001 10001 10101 10101 10101 01010",
  X: "10001 10001 01010 00100 01010 10001 10001",
  Y: "10001 10001 01010 00100 00100 00100 00100",
  Z: "11111 00001 00010 00100 01000 10000 11111",
  "0": "01110 10001 10011 10101 11001 10001 01110",
  "1": "00100 01100 00100 00100 00100 00100 01110",
  "2": "01110 10001 00001 00010 00100 01000 11111",
  "3": "11111 00010 00100 00010 00001 10001 01110",
  "4": "00010 00110 01010 10010 11111 00010 00010",
  "5": "11111 10000 11110 00001 00001 10001 01110",
  "6": "00110 01000 10000 11110 10001 10001 01110",
  "7": "11111 00001 00010 00100 01000 01000 01000",
  "8": "01110 10001 10001 01110 10001 10001 01110",
  "9": "01110 10001 10001 01111 00001 00010 01100",
  ":": "00000 01100 01100 00000 01100 01100 00000",
  ".": "00000 00000 00000 00000 00000 01100 01100",
  ",": "00000 00000 00000 00000 01100 00100 01000",
  "-": "00000 00000 00000 11111 00000 00000 00000",
  "+": "00000 00100 00100 11111 00100 00100 00000",
  "/": "00001 00010 00010 00100 01000 01000 10000",
  "&": "01100 10010 10100 01000 10101 10010 01101",
  ">": "01000 00100 00010 00001 00010 00100 01000",
  "·": "00000 00000 01100 01100 00000 00000 00000",
};
GLYPHS["›"] = GLYPHS[">"];
GLYPHS["•"] = GLYPHS["·"];

const ROWS = 9; // 7 glyph rows plus one dark row above and below
const LIT = "#ffb21e";
const OFF = "rgba(255, 178, 30, 0.08)";

const rasterise = (text: string) => {
  const cols: boolean[][] = [];
  for (const ch of text.toUpperCase()) {
    const g = GLYPHS[ch];
    const rows = g ? g.split(" ") : null;
    const width = ch === " " ? 3 : 5;
    for (let x = 0; x < width; x++) {
      const col = Array(ROWS).fill(false);
      if (rows) for (let y = 0; y < 7; y++) col[y + 1] = rows[y][x] === "1";
      cols.push(col);
    }
    cols.push(Array(ROWS).fill(false));
  }
  return cols;
};

const dot = (size: number, color: string, glow: boolean) => {
  const s = document.createElement("canvas");
  s.width = s.height = size;
  const g = s.getContext("2d")!;
  if (glow) {
    const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0, "rgba(255,178,30,0.45)");
    grad.addColorStop(1, "rgba(255,178,30,0)");
    g.fillStyle = grad;
    g.fillRect(0, 0, size, size);
  }
  g.fillStyle = color;
  g.beginPath();
  g.arc(size / 2, size / 2, size * 0.34, 0, Math.PI * 2);
  g.fill();
  return s;
};

interface Props {
  text: string;
  pitch?: number; // css px between dot centres
  speed?: number; // columns per second
  className?: string;
}

const LedBoard = ({ text, pitch = 4, speed = 22, className = "" }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const message = rasterise(text);
    let grid = message;
    let cols = 0;
    let offset = 0;
    let raf = 0;
    let last = 0;
    let visible = true;
    let lit: HTMLCanvasElement, off: HTMLCanvasElement;

    const size = () => {
      const w = canvas.clientWidth;
      cols = Math.floor(w / pitch);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(ROWS * pitch * dpr);
      const d = Math.round(pitch * dpr);
      lit = dot(d, LIT, true);
      off = dot(d, OFF, false);
      grid = message.length > cols ? message.concat(Array.from({ length: 24 }, () => Array(ROWS).fill(false))) : message;
    };

    const draw = () => {
      const d = pitch * dpr;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const n = grid.length;
      const fits = n <= cols;
      const start = fits ? Math.floor((cols - n) / 2) : 0;
      const o = Math.floor(offset);
      for (let c = 0; c < cols; c++) {
        const col = fits ? grid[c - start] : grid[(((c + o) % n) + n) % n];
        for (let r = 0; r < ROWS; r++) ctx.drawImage(col?.[r] ? lit : off, Math.round(c * d), Math.round(r * d));
      }
    };

    const tick = (t: number) => {
      if (last) offset += ((t - last) / 1000) * speed;
      last = t;
      draw();
      if (visible && !reduce && grid.length > cols) raf = requestAnimationFrame(tick);
    };

    const restart = () => {
      cancelAnimationFrame(raf);
      last = 0;
      raf = requestAnimationFrame(tick);
    };

    size();
    restart();

    const ro = new ResizeObserver(() => {
      size();
      restart();
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) restart();
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [text, pitch, speed]);

  return (
    <div
      role="img"
      aria-label={text}
      className={`rounded-xl bg-[#100c07] px-3 py-2 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.06),inset_0_2px_10px_rgb(0_0_0/0.6)] ${className}`}
    >
      <canvas ref={canvasRef} className="block w-full" style={{ height: ROWS * pitch }} aria-hidden="true" />
    </div>
  );
};

export default LedBoard;

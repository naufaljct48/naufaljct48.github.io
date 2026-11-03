import { useEffect } from "react";

const EDGES = ".chip, .btn, .glass-btn, .board, .spot-edge";

// Site-wide cursor spotlight, kept cheap:
// - the soft glow is one fixed layer; its centre (--cx/--cy on <html>) changes only when the
//   pointer moves, never on scroll;
// - only the element under the pointer lights its edge, from its own local --ex/--ey.
// Fine pointers only: touch screens have no cursor to follow.
export const useSpotlight = () => {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const root = document.documentElement;
    let raf = 0;
    let x = 0;
    let y = 0;
    let lit: HTMLElement | null = null;

    const apply = () => {
      raf = 0;
      root.style.setProperty("--cx", `${x}px`);
      root.style.setProperty("--cy", `${y}px`);
      if (lit) {
        const r = lit.getBoundingClientRect();
        lit.style.setProperty("--ex", `${x - r.left}px`);
        lit.style.setProperty("--ey", `${y - r.top}px`);
      }
    };

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      root.dataset.spot = "";
      const edge = (e.target as Element | null)?.closest<HTMLElement>(EDGES) ?? null;
      if (edge !== lit) {
        if (lit) delete lit.dataset.lit;
        lit = edge;
        if (lit) lit.dataset.lit = "";
      }
      if (!raf) raf = requestAnimationFrame(apply);
    };

    const leave = () => {
      delete root.dataset.spot;
      if (lit) delete lit.dataset.lit;
      lit = null;
    };

    window.addEventListener("pointermove", move, { passive: true });
    root.addEventListener("pointerleave", leave);
    window.addEventListener("blur", leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", leave);
      window.removeEventListener("blur", leave);
    };
  }, []);
};

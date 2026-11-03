import { useEffect, useRef } from "react";

// The hero's ground is a giant passenger display that is switched off: a faint dot-matrix
// field. Dots near the cursor light up amber, like the LED board at the foot of the screen.
// All drawn with CSS gradients; the pointer only moves two custom properties (--hx/--hy).
const HeroDots = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = ref.current?.parentElement;
    if (!hero || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let raf = 0;
    let x = 0;
    let y = 0;
    const apply = () => {
      raf = 0;
      hero.style.setProperty("--hx", `${x}px`);
      hero.style.setProperty("--hy", `${y}px`);
    };
    const move = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      x = e.clientX - r.left;
      y = e.clientY - r.top;
      hero.dataset.lit = "";
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const leave = () => delete hero.dataset.lit;
    hero.addEventListener("pointermove", move);
    hero.addEventListener("pointerleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      hero.removeEventListener("pointermove", move);
      hero.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div ref={ref} className="hero-dots pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div className="hero-dots-base absolute inset-0" />
      <div className="hero-dots-glow absolute inset-0" />
      <div className="hero-dots-lit absolute inset-0" />
    </div>
  );
};

export default HeroDots;

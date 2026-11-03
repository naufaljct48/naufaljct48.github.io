import { useEffect } from "react";

// Scroll choreography for the whole page, set up once.
// 1. [data-reveal] elements get data-shown the first time they enter the viewport.
// 2. Every .strip rail fills (--p, 0→1) as the reading line passes it, and each
//    .strip-stop gets data-reached when the "train" arrives at its dot.
// Only runs when <html> has .motion-ok (set before paint unless reduced motion);
// otherwise everything is already in its final state.
export const useScrollMotion = () => {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("motion-ok")) return;

    // A fully clipped element (the wipe's start state) has no intersection area, so
    // wipes are watched through their parent and revealed on its behalf.
    const watched = new Map<Element, HTMLElement[]>();
    const reveal = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          watched.get(e.target)?.forEach((el) => (el.dataset.shown = ""));
          reveal.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px" }
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      const target = el.dataset.reveal === "wipe" && el.parentElement ? el.parentElement : el;
      watched.set(target, [...(watched.get(target) ?? []), el]);
      reveal.observe(target);
    });

    // stop offsets inside each strip never change after layout, so measure them once (and on resize)
    const strips = Array.from(document.querySelectorAll<HTMLElement>(".strip")).map((el) => ({
      el,
      stops: Array.from(el.querySelectorAll<HTMLElement>(":scope > .strip-stop")),
      offsets: [] as number[],
      last: -1,
    }));
    const measure = () => strips.forEach((s) => (s.offsets = s.stops.map((stop) => stop.offsetTop)));
    measure();
    // web fonts change line wraps, so measure again once they are in
    document.fonts?.ready.then(measure);

    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const line = vh * 0.62;
      // read every rect first, then write, so the browser lays out once per frame
      const rects = strips.map((s) => s.el.getBoundingClientRect());
      strips.forEach((s, i) => {
        const r = rects[i];
        if (r.bottom < -200 || r.top > vh + 200) return;
        const p = Math.min(1, Math.max(0, (line - r.top) / r.height));
        if (Math.abs(p - s.last) > 0.001) {
          s.last = p;
          s.el.style.setProperty("--p", p.toFixed(4));
        }
        s.stops.forEach((stop, j) => {
          if (!("reached" in stop.dataset) && r.top + s.offsets[j] + 20 <= line) stop.dataset.reached = "";
        });
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onResize = () => {
      measure();
      onScroll();
    };
    window.addEventListener("resize", onResize);

    return () => {
      reveal.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);
};

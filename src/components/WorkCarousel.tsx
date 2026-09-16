import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { SiteImage } from "./SiteImage";
import type { SiteImage as SiteImageData } from "../data/siteContent";

type WorkCarouselProps = {
  items: readonly SiteImageData[];
};

const AUTOPLAY_MS = 5500;
const SWIPE_THRESHOLD = 48;
/** Active slide width as a fraction of the viewport — remainder peeks next slide */
const SLIDE_FRACTION = 0.86;
const GAP_PX = 16;

export function WorkCarousel({ items }: WorkCarouselProps) {
  const count = items.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [slideWidth, setSlideWidth] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (next: number) => {
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => {
      setSlideWidth(el.clientWidth * SLIDE_FRACTION);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (count < 2 || paused || reducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [count, paused, reducedMotion]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    dragStartX.current = event.clientX;
    setDragging(true);
    setDragOffset(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    setDragOffset(event.clientX - dragStartX.current);
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    const delta = event.clientX - dragStartX.current;
    dragStartX.current = null;
    setDragging(false);
    setDragOffset(0);
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      /* already released */
    }
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) goNext();
    else goPrev();
  };

  if (count === 0) return null;

  const stride = slideWidth + GAP_PX;
  const trackTransform = `translate3d(${-(index * stride) + dragOffset}px, 0, 0)`;

  return (
    <div
      className="work-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected work"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div
        ref={viewportRef}
        className="work-carousel__viewport"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          className={`work-carousel__track${dragging ? " is-dragging" : ""}`}
          style={{
            transform: trackTransform,
            gap: GAP_PX,
          }}
        >
          {items.map((item, i) => (
            <div
              key={`work-slide-${i}`}
              className="work-carousel__slide"
              style={{ flex: `0 0 ${slideWidth || "86%"}`, width: slideWidth || "86%" }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={i !== index}
            >
              <SiteImage
                src={item.src}
                alt={item.alt}
                caption={item.caption}
                objectPosition={item.objectPosition}
                className="figure--square"
              />
            </div>
          ))}
        </div>
      </div>

      {count > 1 ? (
        <div className="work-carousel__controls">
          <button
            type="button"
            className="work-carousel__nav"
            onClick={goPrev}
            aria-label="Previous work"
          >
            ←
          </button>
          <div className="work-carousel__dots" role="tablist" aria-label="Slide">
            {items.map((_, i) => (
              <button
                key={`work-dot-${i}`}
                type="button"
                role="tab"
                className={`work-carousel__dot${i === index ? " is-active" : ""}`}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === index}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="work-carousel__nav"
            onClick={goNext}
            aria-label="Next work"
          >
            →
          </button>
        </div>
      ) : null}
    </div>
  );
}

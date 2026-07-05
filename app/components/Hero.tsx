"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { HeroSlide } from "../data/content";

type HeroProps = {
  slides: HeroSlide[];
  onPlay: (slide: HeroSlide) => void;
  onMoreInfo: (slide: HeroSlide) => void;
};

export default function Hero({ slides, onPlay, onMoreInfo }: HeroProps) {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const goTo = useCallback(
    (index: number) => {
      setActive((index + slides.length) % slides.length);
    },
    [slides.length]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === active && slides[i].type === "video") {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active, slides]);

  const current = slides[active];

  return (
    <section className="relative h-[85vh] min-h-[500px] w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === active ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {slide.type === "image" ? (
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              priority={i === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          ) : (
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={slide.src}
              poster={slide.poster}
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-[1]" />

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-[18%] left-4 md:left-12 max-w-lg z-10">
        <h1 className="text-3xl md:text-5xl font-black text-white mb-2 drop-shadow-lg">
          {current.title}
        </h1>
        <p className="text-sm md:text-base text-gray-200 mb-5 line-clamp-2 drop-shadow">
          {current.description}
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onPlay(current)}
            className="flex items-center gap-2 bg-white text-black font-bold px-6 py-2.5 rounded hover:bg-white/80 transition-colors text-sm md:text-base"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>
          <button
            onClick={() => onMoreInfo(current)}
            className="flex items-center gap-2 bg-gray-500/60 text-white font-semibold px-6 py-2.5 rounded hover:bg-gray-500/40 transition-colors text-sm md:text-base backdrop-blur-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            More Info
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-white" : "w-4 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-4 md:right-12 border-l-2 border-white/60 pl-2 text-xs text-gray-300 hidden md:block z-10">
        {current.rating}
      </div>
    </section>
  );
}

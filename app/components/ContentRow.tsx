"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { ContentItem } from "../data/content";

type ContentRowProps = {
  title: string;
  items: ContentItem[];
  onItemClick: (item: ContentItem) => void;
};

export default function ContentRow({ title, items, onItemClick }: ContentRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  if (items.length === 0) return null;

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return;
    const amount = rowRef.current.clientWidth * 0.75;
    rowRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!rowRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
    setShowLeft(scrollLeft > 10);
    setShowRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  return (
    <section className="mb-8 group/row">
      <h2 className="text-white text-lg md:text-xl font-semibold mb-3 px-4 md:px-12">
        {title}
      </h2>

      <div className="relative">
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-0 bottom-0 z-20 w-12 bg-black/60 opacity-0 group-hover/row:opacity-100 hover:bg-black/80 transition-all flex items-center justify-center"
            aria-label="Scroll left"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <div
          ref={rowRef}
          onScroll={handleScroll}
          className="flex gap-2 overflow-x-auto scrollbar-hide px-4 md:px-12 pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onItemClick(item)}
              className="relative flex-shrink-0 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[250px] aspect-video rounded overflow-hidden group/card cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="250px"
              />

              {item.progress !== undefined && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
                  <div
                    className="h-full bg-[#e50914]"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              )}

              {item.isNew && (
                <span className="absolute bottom-2 left-2 bg-[#e50914] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                  NEW
                </span>
              )}

              <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>

        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-0 bottom-0 z-20 w-12 bg-black/60 opacity-0 group-hover/row:opacity-100 hover:bg-black/80 transition-all flex items-center justify-center"
            aria-label="Scroll right"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}

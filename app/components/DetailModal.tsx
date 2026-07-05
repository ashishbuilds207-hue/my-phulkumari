"use client";

import Image from "next/image";
import { useEffect, useMemo } from "react";
import { allContent, type ContentItem } from "../data/content";

type DetailModalProps = {
  item: ContentItem | null;
  onClose: () => void;
  onPlay: (item: ContentItem) => void;
  onSelect: (item: ContentItem) => void;
};

function hashId(id: string): number {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash << 5) - hash + id.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function pickRelated(current: ContentItem): ContentItem[] {
  const others = allContent.filter((c) => c.id !== current.id);
  const seed = hashId(current.id);
  return [...others]
    .sort((a, b) => hashId(a.id + seed) - hashId(b.id + seed))
    .slice(0, 6);
}

export default function DetailModal({ item, onClose, onPlay, onSelect }: DetailModalProps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const related = useMemo(() => (item ? pickRelated(item) : []), [item?.id]);

  useEffect(() => {
    if (!item) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 backdrop-blur-sm overflow-y-auto py-8 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#181818] rounded-lg overflow-hidden shadow-2xl animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-[#181818] flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative h-[45vh] min-h-[250px]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 drop-shadow-lg">
              {item.title.toUpperCase()}
            </h2>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onPlay(item)}
                className="flex items-center gap-2 bg-white text-black font-bold px-8 py-2.5 rounded hover:bg-white/80 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center text-white hover:border-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center text-white hover:border-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3 text-sm flex-wrap">
              <span className="text-green-500 font-semibold">{item.match}% Match</span>
              <span className="text-gray-400">{item.year}</span>
              {item.seasons && (
                <span className="border border-gray-500 text-gray-300 px-1.5 py-0.5 text-xs rounded">
                  {item.seasons}
                </span>
              )}
              <span className="border border-gray-500 text-gray-300 px-1.5 py-0.5 text-xs rounded">
                HD
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="border border-gray-500 text-gray-300 px-2 py-0.5 text-xs">
                {item.rating}
              </span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
          </div>

          <div className="space-y-3 text-sm">
            <p className="text-gray-400">
              <span className="text-gray-500">Cast: </span>
              {item.cast.join(", ")}
            </p>
            <p className="text-gray-400">
              <span className="text-gray-500">Genres: </span>
              {item.genres.join(", ")}
            </p>
            <p className="text-gray-400">
              <span className="text-gray-500">This show is: </span>
              {item.moods.join(", ")}
            </p>
          </div>
        </div>

        <div className="px-6 pb-8">
          <h3 className="text-white text-xl font-semibold mb-4">More Like This</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {related.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onSelect(rel)}
                className="bg-[#2f2f2f] rounded overflow-hidden cursor-pointer hover:bg-[#3a3a3a] transition-colors group/rel"
              >
                <div className="relative aspect-video">
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/rel:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onPlay(rel);
                      }}
                      aria-label={`Play ${rel.title}`}
                      className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center text-black hover:bg-white hover:scale-110 transition-transform"
                    >
                      <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  {rel.isNew && (
                    <span className="absolute top-2 left-2 bg-[#e50914] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                      NEW
                    </span>
                  )}
                  <span className="absolute bottom-2 right-2 text-[10px] text-gray-200 bg-black/60 px-1.5 py-0.5 rounded">
                    {rel.year}
                  </span>
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-green-500 text-xs font-semibold">
                      {rel.match}% Match
                    </span>
                    <span className="border border-gray-500 text-gray-300 px-1 py-0.5 text-[10px] rounded">
                      {rel.rating}
                    </span>
                  </div>
                  <p className="text-white text-sm font-semibold mb-1">{rel.title}</p>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                    {rel.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

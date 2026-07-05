"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ContentRow from "./ContentRow";
import DetailModal from "./DetailModal";
import VideoPlayer from "./VideoPlayer";
import {
  heroContent,
  heroSlides,
  contentRows,
  MAIN_VIDEO,
  type ContentItem,
  type HeroSlide,
} from "../data/content";

function slideToContent(slide: HeroSlide): ContentItem {
  return {
    ...heroContent,
    id: slide.id,
    title: slide.title,
    description: slide.description,
    image: slide.type === "image" ? slide.src : heroContent.image,
    video: slide.playVideo,
    rating: slide.rating,
  };
}

export default function HomePage() {
  const [selectedItem, setSelectedItem] = useState<ContentItem | null>(null);
  const [playingVideo, setPlayingVideo] = useState<{
    src: string;
    title: string;
  } | null>(null);

  const handlePlay = (item: ContentItem) => {
    const videoSrc = item.video || MAIN_VIDEO;
    setSelectedItem(null);
    setPlayingVideo({ src: videoSrc, title: item.title });
  };

  const handleHeroPlay = (slide: HeroSlide) => {
    setPlayingVideo({ src: slide.playVideo, title: slide.title });
  };

  const handleHeroMoreInfo = (slide: HeroSlide) => {
    setSelectedItem(slideToContent(slide));
  };

  return (
    <div className="min-h-screen bg-[#141414]">
      <Navbar />

      <Hero
        slides={heroSlides}
        onPlay={handleHeroPlay}
        onMoreInfo={handleHeroMoreInfo}
      />

      <div className="relative -mt-32 z-10 pb-16">
        {contentRows.map((row) => (
          <ContentRow
            key={row.title}
            title={row.title}
            items={row.items}
            onItemClick={setSelectedItem}
          />
        ))}
      </div>

      <footer className="border-t border-gray-800 py-8 px-4 md:px-12 text-gray-500 text-sm">
        <p className="text-[#e50914] text-2xl font-black mb-4">PhulKumari</p>
        <p>&copy; 2026 PhulKumari. All rights reserved.</p>
      </footer>

      <DetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onPlay={handlePlay}
        onSelect={setSelectedItem}
      />

      {playingVideo && (
        <VideoPlayer
          src={playingVideo.src}
          title={playingVideo.title}
          onClose={() => setPlayingVideo(null)}
        />
      )}
    </div>
  );
}

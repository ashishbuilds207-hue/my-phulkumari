"use client";

import { useEffect, useRef } from "react";

type VideoPlayerProps = {
  src: string;
  title: string;
  onClose: () => void;
};

export default function VideoPlayer({ src, title, onClose }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    const timer = setTimeout(() => {
      videoRef.current?.play().catch(() => {});
    }, 100);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Close player"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="w-full max-w-5xl px-4">
        <p className="text-white text-lg font-semibold mb-3 text-center">{title}</p>
        <video
          ref={videoRef}
          src={src}
          controls
          autoPlay
          playsInline
          className="w-full max-h-[80vh] rounded-lg bg-black"
        />
      </div>
    </div>
  );
}

import { videoUrl } from "../lib/media";

export type ContentItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  year: string;
  match: number;
  rating: string;
  genres: string[];
  cast: string[];
  moods: string[];
  seasons?: string;
  isNew?: boolean;
  progress?: number;
};

export const MAIN_VIDEO = videoUrl("/videos/main/VN20260706_024429.mp4");
export const ROMANTIC_VIDEO = videoUrl("/videos/main/Romantic_Video_v2.mp4");

export type HeroSlide = {
  id: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  title: string;
  description: string;
  playVideo: string;
  rating: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "hero-main",
    type: "video",
    src: MAIN_VIDEO,
    poster: "/images/hero-thumbnail.png",
    title: "PhulKumari",
    description:
      "Netflix? Nah... I'm busy watching PhulKumari's story on repeat.",
    playVideo: MAIN_VIDEO,
    rating: "U/A 13+",
  },
  {
    id: "hero-romantic",
    type: "video",
    src: ROMANTIC_VIDEO,
    title: "PhulKumari — Romantic Moments",
    description:
      "A beautiful romantic story starring PhulKumari — feel every moment.",
    playVideo: ROMANTIC_VIDEO,
    rating: "U/A 13+",
  },
];

export const heroContent: ContentItem = {
  id: "hero",
  title: "PhulKumari",
  description:
    "A cinematic journey through PhulKumari's moments captured in time — watch the featured story unfold in this exclusive premiere.",
  image: "/images/hero-thumbnail.png",
  video: MAIN_VIDEO,
  year: "2026",
  match: 98,
  rating: "U/A 13+",
  genres: ["Drama", "Romance", "Featured"],
  cast: ["PhulKumari", "Featured Cast"],
  moods: ["Emotional", "Beautiful", "Captivating"],
  seasons: "1 Season",
};

const items: Omit<ContentItem, "id">[] = [
  {
    title: "Golden Hour",
    description:
      "When the sun dips low, memories come alive in warm light and quiet reflection.",
    image: "/images/IMG_20260705_201058_344.jpg",
    video: videoUrl("/videos/short/VID_20260705_074110_444.mp4"),
    year: "2026",
    match: 92,
    rating: "U/A 13+",
    genres: ["Drama", "Romance"],
    cast: ["Featured Artist"],
    moods: ["Warm", "Nostalgic"],
    isNew: true,
  },
  {
    title: "Midnight Stories",
    description:
      "Late-night tales whispered between shadows — a collection of intimate moments.",
    image: "/images/IMG_20260705_201058_345.jpg",
    video: videoUrl("/videos/short/VID_20260705_074114_848.mp4"),
    year: "2025",
    match: 88,
    rating: "U/A 16+",
    genres: ["Thriller", "Drama"],
    cast: ["Lead Role", "Supporting"],
    moods: ["Mysterious", "Intense"],
  },
  {
    title: "Against the Tide",
    description:
      "Fighting every wave to find your place — a story of courage and determination.",
    image: "/images/IMG_20260705_201058_346.jpg",
    video: videoUrl("/videos/short/VID_20260705_074119_345.mp4"),
    year: "2024",
    match: 85,
    rating: "U/A 16+",
    genres: ["Action", "Drama"],
    cast: ["Star Cast", "Ensemble"],
    moods: ["Exciting", "Bittersweet"],
    seasons: "1 Season",
  },
  {
    title: "Velvet Dreams",
    description:
      "Soft textures and bold colors collide in this visually stunning short film.",
    image: "/images/IMG_20260705_201058_347.jpg",
    video: videoUrl("/videos/short/VID_20260705_074123_924.mp4"),
    year: "2025",
    match: 90,
    rating: "U/A 13+",
    genres: ["Romance", "Art House"],
    cast: ["Featured Duo"],
    moods: ["Dreamy", "Romantic"],
    isNew: true,
  },
  {
    title: "City Lights",
    description:
      "Neon reflections and bustling streets — urban life captured in motion.",
    image: "/images/IMG_20260705_201104_717.jpg",
    video: videoUrl("/videos/short/VID_20260705_074128_472.mp4"),
    year: "2024",
    match: 87,
    rating: "U/A 13+",
    genres: ["Documentary", "Urban"],
    cast: ["City Voices"],
    moods: ["Energetic", "Vibrant"],
  },
  {
    title: "Silent Echo",
    description:
      "What remains when words fade away — an emotional exploration of loss and hope.",
    image: "/images/IMG_20260705_201104_719.jpg",
    video: videoUrl("/videos/short/VID_20260705_075612_816.mp4"),
    year: "2025",
    match: 94,
    rating: "U/A 16+",
    genres: ["Drama", "Emotional"],
    cast: ["Lead Actress", "Lead Actor"],
    moods: ["Heartbreaking", "Hopeful"],
    progress: 65,
  },
  {
    title: "Bloom",
    description:
      "Like flowers after rain, beauty emerges from the most unexpected places.",
    image: "/images/IMG_20260705_201104_720.jpg",
    video: videoUrl("/videos/short/Screen_Recording_20260706_003320_Instagram.mp4"),
    year: "2026",
    match: 91,
    rating: "U/A 13+",
    genres: ["Romance", "Feel-Good"],
    cast: ["Rising Star"],
    moods: ["Uplifting", "Sweet"],
    isNew: true,
  },
  {
    title: "Shadow Play",
    description:
      "Light and darkness dance together in this visually arresting narrative.",
    image: "/images/IMG_20260705_201104_721.jpg",
    video: videoUrl("/videos/short/Screen_Recording_20260706_003522_Instagram.mp4"),
    year: "2024",
    match: 83,
    rating: "U/A 16+",
    genres: ["Mystery", "Thriller"],
    cast: ["Ensemble Cast"],
    moods: ["Dark", "Suspenseful"],
  },
  {
    title: "Horizon Line",
    description:
      "Where sky meets earth, endless possibilities stretch before you.",
    image: "/images/IMG_20260705_201339_376.jpg",
    video: videoUrl("/videos/short/Screen_Recording_20260706_003559_Instagram.mp4"),
    year: "2025",
    match: 89,
    rating: "U/A 13+",
    genres: ["Adventure", "Drama"],
    cast: ["Explorer", "Guide"],
    moods: ["Inspiring", "Epic"],
  },
  {
    title: "Crimson Tide",
    description:
      "Passion runs deep in this bold tale of love, loss, and redemption.",
    image: "/images/IMG_20260705_201343_193.jpg",
    video: videoUrl("/videos/short/Screen_Recording_20260706_003633_Instagram.mp4"),
    year: "2024",
    match: 86,
    rating: "U/A 16+",
    genres: ["Romance", "Drama"],
    cast: ["Lead Pair"],
    moods: ["Passionate", "Intense"],
    progress: 30,
  },
  {
    title: "Whispers",
    description:
      "Secrets shared in hushed tones — a delicate story of trust and betrayal.",
    image: "/images/IMG_20260705_201345_912.jpg",
    year: "2025",
    match: 84,
    rating: "U/A 13+",
    genres: ["Drama", "Mystery"],
    cast: ["Featured Cast"],
    moods: ["Tense", "Intimate"],
  },
  {
    title: "Starfall",
    description:
      "When stars descend, wishes come true — a magical evening unfolds.",
    image: "/images/IMG_20260705_201348_652.jpg",
    year: "2026",
    match: 93,
    rating: "U/A 13+",
    genres: ["Fantasy", "Romance"],
    cast: ["Dream Cast"],
    moods: ["Magical", "Wonder"],
    isNew: true,
  },
  {
    title: "Afterglow",
    description:
      "The warmth that lingers long after the moment has passed.",
    image: "/images/IMG_20260705_201351_128.jpg",
    year: "2024",
    match: 88,
    rating: "U/A 13+",
    genres: ["Romance", "Drama"],
    cast: ["Lead Role"],
    moods: ["Tender", "Reflective"],
  },
  {
    title: "Pulse",
    description:
      "Feel the rhythm of life in this fast-paced visual experience.",
    image: "/images/IMG_20260705_201353_699.jpg",
    year: "2025",
    match: 90,
    rating: "U/A 16+",
    genres: ["Action", "Music"],
    cast: ["Performer"],
    moods: ["Energetic", "Bold"],
  },
  {
    title: "Mirage",
    description:
      "Reality bends and shifts in the desert heat of this surreal tale.",
    image: "/images/IMG_20260705_201356_226.jpg",
    year: "2024",
    match: 82,
    rating: "U/A 16+",
    genres: ["Sci-Fi", "Drama"],
    cast: ["Visionary Cast"],
    moods: ["Surreal", "Thought-provoking"],
  },
  {
    title: "Eclipse",
    description:
      "In total darkness, a new light emerges — a story of transformation.",
    image: "/images/IMG_20260705_201401_418.jpg",
    year: "2025",
    match: 91,
    rating: "U/A 13+",
    genres: ["Drama", "Fantasy"],
    cast: ["Star Ensemble"],
    moods: ["Dark", "Hopeful"],
    progress: 45,
  },
  {
    title: "Drift",
    description:
      "Floating through time and space, finding meaning in the journey.",
    image: "/images/IMG_20260705_201404_066.jpg",
    year: "2026",
    match: 87,
    rating: "U/A 13+",
    genres: ["Art House", "Drama"],
    cast: ["Solo Artist"],
    moods: ["Calm", "Meditative"],
  },
  {
    title: "Ember",
    description:
      "A single spark can ignite the greatest fire — passion knows no bounds.",
    image: "/images/IMG_20260705_201412_004.jpg",
    year: "2024",
    match: 85,
    rating: "U/A 16+",
    genres: ["Romance", "Drama"],
    cast: ["Lead Duo"],
    moods: ["Fiery", "Emotional"],
  },
  {
    title: "Solstice",
    description:
      "The longest day holds the deepest secrets of summer.",
    image: "/images/IMG_20260705_201414_328.jpg",
    year: "2025",
    match: 89,
    rating: "U/A 13+",
    genres: ["Drama", "Seasonal"],
    cast: ["Summer Cast"],
    moods: ["Bright", "Nostalgic"],
  },
  {
    title: "Nocturne",
    description:
      "A melody played only under moonlight — haunting and beautiful.",
    image: "/images/IMG_20260705_201416_766.jpg",
    year: "2024",
    match: 92,
    rating: "U/A 13+",
    genres: ["Music", "Romance"],
    cast: ["Musician", "Muse"],
    moods: ["Melancholic", "Beautiful"],
  },
  {
    title: "Aurora",
    description:
      "Northern lights paint the sky in colors never seen before.",
    image: "/images/IMG_20260705_201419_002.jpg",
    year: "2026",
    match: 95,
    rating: "U/A 13+",
    genres: ["Adventure", "Nature"],
    cast: ["Explorer"],
    moods: ["Breathtaking", "Wonder"],
    isNew: true,
  },
  {
    title: "Fragment",
    description:
      "Pieces of a broken mirror reflect a thousand different truths.",
    image: "/images/IMG_20260705_201421_120.jpg",
    year: "2025",
    match: 83,
    rating: "U/A 16+",
    genres: ["Psychological", "Drama"],
    cast: ["Ensemble"],
    moods: ["Unsettling", "Deep"],
  },
  {
    title: "Cascade",
    description:
      "Water flows endlessly, carrying stories from mountain to sea.",
    image: "/images/IMG_20260705_201423_415.jpg",
    year: "2024",
    match: 86,
    rating: "U/A 13+",
    genres: ["Nature", "Documentary"],
    cast: ["Narrator"],
    moods: ["Peaceful", "Majestic"],
  },
  {
    title: "Reverie",
    description:
      "Lost in daydreams where anything is possible and nothing is real.",
    image: "/images/IMG_20260705_202356_171.jpg",
    year: "2025",
    match: 88,
    rating: "U/A 13+",
    genres: ["Fantasy", "Romance"],
    cast: ["Dreamer"],
    moods: ["Whimsical", "Soft"],
  },
  {
    title: "Phoenix Rise",
    description:
      "From ashes, something magnificent is reborn — a tale of resilience.",
    image: "/images/IMG_20260705_202359_006.jpg",
    year: "2026",
    match: 96,
    rating: "U/A 16+",
    genres: ["Drama", "Inspirational"],
    cast: ["Hero", "Mentor"],
    moods: ["Powerful", "Uplifting"],
    isNew: true,
  },
];

export const allContent: ContentItem[] = items.map((item, i) => ({
  ...item,
  id: `item-${i}`,
}));

export const contentRows = [
  {
    title: "Only on PhulKumari",
    items: allContent.slice(0, 8),
  },
  {
    title: "Continue Watching for You",
    items: allContent.filter((item) => item.progress),
  },
  {
    title: "Trending Now",
    items: allContent.slice(8, 16),
  },
  {
    title: "New Releases",
    items: allContent.filter((item) => item.isNew),
  },
  {
    title: "Romantic Dramas",
    items: allContent.slice(12, 20),
  },
  {
    title: "Top Picks for You",
    items: allContent.slice(4, 12),
  },
];

const GITHUB_REPO = "ashishbuilds207-hue/my-phulkumari";
const GITHUB_BRANCH = "main";

/**
 * Local public path like `/videos/main/foo.mp4` → playable URL.
 *
 * In development the real mp4 files exist in public/, so the local path works.
 * In production (Vercel) the deployed public/ folder only contains Git LFS
 * pointer files, so videos are streamed from GitHub's media CDN instead.
 * NODE_ENV is inlined by Next.js in both server and client bundles, so the
 * URL is identical on both sides (no hydration mismatch).
 */
export function videoUrl(localPath: string): string {
  const customBase = process.env.NEXT_PUBLIC_VIDEO_BASE_URL;
  if (customBase) {
    return `${customBase.replace(/\/$/, "")}${localPath}`;
  }

  if (process.env.NODE_ENV === "production") {
    return `https://media.githubusercontent.com/media/${GITHUB_REPO}/${GITHUB_BRANCH}/public${localPath}`;
  }

  return localPath;
}

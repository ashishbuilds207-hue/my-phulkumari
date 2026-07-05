const GITHUB_REPO = "ashishbuilds207-hue/my-phulkumari";
const GITHUB_BRANCH = "main";

/** Local public path like `/videos/main/foo.mp4` → full URL for dev or Vercel. */
export function videoUrl(localPath: string): string {
  const customBase = process.env.NEXT_PUBLIC_VIDEO_BASE_URL;
  if (customBase) {
    return `${customBase.replace(/\/$/, "")}${localPath}`;
  }

  // Vercel cannot pull Git LFS — serve mp4 from GitHub media CDN instead.
  if (process.env.VERCEL === "1") {
    return `https://media.githubusercontent.com/media/${GITHUB_REPO}/${GITHUB_BRANCH}/public${localPath}`;
  }

  return localPath;
}

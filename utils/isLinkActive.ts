/**
 * Check if the given path is part of the current URL
 * @param originalHref Complete URL of the link
 * @param path Path to check
 */
export default function isLinkActive(originalHref: string, path: string) {
  const originalUrl = new URL(originalHref);
  const currentUrl = new URL(path);

  return originalUrl.href === currentUrl.href;
}

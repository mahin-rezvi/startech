export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://startech-atlas.example.com";

export function toAbsoluteSiteUrl(pathname = "/") {
  return new URL(pathname, SITE_URL).toString();
}

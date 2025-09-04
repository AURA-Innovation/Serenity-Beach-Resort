export function buildUnsplashSrcSet(baseUrl: string, widths: number[] = [480, 768, 1024, 1600]) {
  const url = new URL(baseUrl);
  const existingW = url.searchParams.get("w");
  const params = url.searchParams;
  params.set("auto", "format");
  params.set("fit", params.get("fit") || "crop");
  params.set("q", params.get("q") || "80");

  return widths
    .map((w) => {
      params.set("w", String(w));
      return `${url.origin}${url.pathname}?${params.toString()} ${w}w`;
    })
    .join(", ");
}

export const defaultSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
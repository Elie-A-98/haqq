export const Dictionary = {
  "articles.x-posts": (x: number) => `post${x !== 1 ? "s" : ""}`,
  "articles.x-found": (x: number) => `${x !== 1 ? "were" : "was"} found`,
} as const;

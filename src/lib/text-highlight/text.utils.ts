export const getTruncatedText = (text: string, maxLength: number) =>
  text.length > maxLength ? text.slice(0, maxLength).concat("...") : text;

export const getLetter = (city: string, index: number): string => {
  return city
    .replace(/[ьъый]+$/, "")
    .slice(index, index >= 0 ? index + 1 : undefined)
    .toLowerCase();
};

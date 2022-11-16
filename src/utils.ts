
export const mapQueryByLocale = (items, locale) => {
  return items.filter(({ lang2 }) => lang2 === locale.toUpperCase());
};

export function localizedPath(defaultLocale: string, locale: string, path: string): string {
  const [, base] = path.split(`/`);
  if (locale === defaultLocale || base === locale) return path;
  return `/${locale}${path}`;
}

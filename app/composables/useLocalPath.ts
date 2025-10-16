export const useLocalPath = () => {
  const { locale, defaultLocale } = useI18n();

  const localizedPath = (postPath: string) => {
    let clean = postPath
      .replace(/^\/[a-z]{2}\//, "/")
      .replace(/\.[a-z]{2}$/, "");

    if (locale.value !== defaultLocale) {
      clean = `/${locale.value}${clean}`;
    }

    return clean;
  };

  return { localizedPath };
};

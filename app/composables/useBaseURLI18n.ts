export const useBaseURLI18n = () => {
  const { locale } = useI18n();

  const baseUrl = computed<string>(() => {
    const base = locale.value !== "ru" ? locale.value : "";
    return base ? `/${base}` : base;
  });

  return { baseUrl };
};

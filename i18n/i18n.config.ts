import ru from "./locales/ru.json";
import en from "./locales/en.json";

export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: "ru",
    fallbackLocale: "en",
    messages: {
      en,
      ru,
    },
  };
});

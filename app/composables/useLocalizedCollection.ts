/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRoute } from "#imports";
import type { Collections } from "@nuxt/content";
import { useI18n } from "vue-i18n";

export const useLocalizedCollection = <T>(
  baseName: string,
  orderKey: any,
  limit: number = 3
) => {
  const route = useRoute();
  const { locale } = useI18n();

  const collectionsMap = {
    ru: `${baseName}_ru`,
    en: `${baseName}_en`,
  } as const;

  const { data, pending, error, refresh } = useAsyncData(
    `${baseName}-${locale.value}-${route.path}`,
    async () => {
      const collection = collectionsMap[
        locale.value as keyof typeof collectionsMap
      ] as keyof Collections;

      let content = await queryCollection(collection)
        .where("draft", "=", false)
        .order(orderKey, "DESC")
        .limit(limit)
        .all();

      if ((!content || content.length === 0) && locale.value !== "ru") {
        content = await queryCollection(`${baseName}_ru` as keyof Collections)
          .where("draft", "=", false)
          .order(orderKey, "DESC")
          .limit(limit)
          .all();
      }

      return content as T;
    },
    {
      watch: [locale],
      server: true,
      lazy: false,
    }
  );

  return {
    data,
    pending,
    error,
    refresh,
  };
};

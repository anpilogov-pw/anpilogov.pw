import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    blog_ru: defineCollection({
      type: "page",
      source: "ru/blog/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
        cover: z.string().optional(),
      }),
    }),
    blog_en: defineCollection({
      type: "page",
      source: "en/blog/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
        cover: z.string().optional(),
      }),
    }),
    coop_ru: defineCollection({
      type: "data",
      source: "ru/coop/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        draft: z.boolean().default(false),
        cover: z.string().optional(),
      }),
    }),
    coop_en: defineCollection({
      type: "data",
      source: "en/coop/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        draft: z.boolean().default(false),
        cover: z.string().optional(),
      }),
    }),
  },
});

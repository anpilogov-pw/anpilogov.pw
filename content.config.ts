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
    privacy_ru: defineCollection({
      type: "page",
      source: "ru/privacy/*.md",
    }),
    privacy_en: defineCollection({
      type: "page",
      source: "en/privacy/*.md",
    }),
    testimonial_ru: defineCollection({
      type: "data",
      source: "ru/testimonials/*.md",
      schema: z.object({
        fullname: z.string(),
        post: z.string(),
        organization: z.string(),
        avatar: z.string().optional(),
        testimonial: z.string(),
        date: z.coerce.date(),
        draft: z.boolean().default(false),
      }),
    }),
    testimonial_en: defineCollection({
      type: "data",
      source: "en/testimonials/*.md",
      schema: z.object({
        fullname: z.string(),
        post: z.string(),
        organization: z.string(),
        avatar: z.string().optional(),
        testimonial: z.string(),
        date: z.coerce.date(),
        draft: z.boolean().default(false),
      }),
    }),
    companies_ru: defineCollection({
      type: "page",
      source: "ru/companies/*.md",
      schema: z.object({
        title: z.string(),
        period: z.string(),
        description: z.string(),
        tags: z.array(z.string()).default([]),
        date: z.coerce.date(),
        draft: z.boolean().default(false),
      }),
    }),
    companies_en: defineCollection({
      type: "page",
      source: "en/companies/*.md",
      schema: z.object({
        title: z.string(),
        period: z.string(),
        description: z.string(),
        tags: z.array(z.string()).default([]),
        date: z.coerce.date(),
        draft: z.boolean().default(false),
      }),
    }),
  },
});

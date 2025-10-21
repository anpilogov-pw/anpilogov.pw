import { useHead } from "#imports";
import { CONFIG } from "~/constants";

type BlogPost = {
  title?: string;
  description?: string;
  cover?: string;
  date?: string;
};

export const useSchemaOrg = () => {
  const { t } = useI18n();

  const injectSchema = (data: Record<string, unknown>) => {
    useHead({
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(data),
          tagPriority: "critical",
        },
      ],
    });
  };

  const person = () => {
    injectSchema({
      "@context": "https://schema.org",
      "@type": "Person",
      name: t("author.name"),
      jobTitle: t("author.position"),
      url: "https://anpilogov.pw/",
      sameAs: [
        "https://github.com/anpilogov-pw",
        "https://t.me/anpilogov_artyom",
      ],
    });
  };

  const blog = () => {
    injectSchema({
      "@context": "https://schema.org",
      "@type": "Blog",
      headline: t("page.blog.title"),
      description: t("page.blog.description"),
      url: "https://anpilogov.pw/blog",
      author: {
        "@type": "Person",
        name: t("author.name"),
        jobTitle: t("author.position"),
        url: "https://anpilogov.pw/",
        sameAs: [
          "https://github.com/anpilogov-pw",
          "https://t.me/anpilogov_artyom",
        ],
      },
      publisher: {
        "@type": "Organization",
        name: t("author.name"),
        url: "https://anpilogov.pw/",
      },
    });
  };

  const article = (post: BlogPost) => {
    injectSchema({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      image: post.cover ? `${CONFIG.siteUrl}${post.cover}` : undefined,
      author: {
        "@type": "Person",
        name: t("author.name"),
        jobTitle: t("author.position"),
        url: "https://anpilogov.pw/",
        sameAs: [
          "https://github.com/anpilogov-pw",
          "https://t.me/anpilogov_artyom",
        ],
      },
      publisher: {
        "@type": "Organization",
        name: t("author.name"),
        url: "https://anpilogov.pw/",
      },
      datePublished: post.date,
      dateModified: post.date,
    });
  };

  const privacy = () => {
    injectSchema({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: t("page.privacy.title"),
      url: "https://anpilogov.pw/privacy",
      description: t("page.privacy.description"),
      mainEntity: {
        "@type": "Person",
        name: t("author.name"),
        jobTitle: t("author.position"),
        url: "https://anpilogov.pw/",
        sameAs: [
          "https://github.com/anpilogov-pw",
          "https://t.me/anpilogov_artyom",
        ],
      },
      specialty: "Privacy Policy",
    });
  };

  const contact = () => {
    injectSchema({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: t("page.contacts.title"),
      description: t("page.contacts.description"),
      url: "https://anpilogov.pw/contacts",
      mainEntity: {
        "@type": "Person",
        name: t("author.name"),
        jobTitle: t("author.position"),
        url: "https://anpilogov.pw/",
        sameAs: [
          "https://github.com/anpilogov-pw",
          "https://t.me/anpilogov_artyom",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            availableLanguage: ["Russian", "English"],
            url: "https://anpilogov.pw/contacts",
            email: "a.o.anpilogov@yandex.ru",
          },
        ],
      },
      publisher: {
        "@type": "Organization",
        name: t("author.name"),
        url: "https://anpilogov.pw/",
      },
    });
  };

  return {
    person,
    blog,
    article,
    privacy,
    contact,
  };
};

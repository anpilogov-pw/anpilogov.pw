/* eslint-disable @typescript-eslint/no-explicit-any */
export type TCollection = {
  id: string;
  title: string;
  body: {
    type: "minimark";
    value: MinimarkNode[];
    toc: Toc;
  };
  description: string;
  extension: string;
  meta: Record<string, any>;
  navigation: boolean;
  path: string;
  seo: {
    title: string;
    description: string;
  };
  stem: string;
  __hash__: string;
};

type Toc = {
  title: string;
  searchDepth: number;
  depth: number;
  links: TocLink[];
};

type TocLink = {
  id: string;
  text: string;
  depth: number;
};

type MinimarkNode = [string, Record<string, any>, ...MinimarkChild[]];

type MinimarkChild = string | MinimarkNode;

export type TBlogPost = TCollection & {
  title: string;
  description: string;
  path: string;
  date: string;
  tags: string[];
  draft?: boolean;
  cover?: string;
};

export type TCoopPost = TCollection & {
  title: string;
  description: string;
  path: string;
  draft?: boolean;
  cover: string;
};

export type TTestimonialPost = TCollection & {
  fullname: string;
  post: string;
  organization: string;
  avatar: string;
  testimonial: string;
  date: string;
  draft: boolean;
};

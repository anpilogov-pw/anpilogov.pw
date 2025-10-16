type TBasePost = {
  meta?: {
    path?: string;
    body?: {
      type?: string;
      value?: unknown[];
      toc?: {
        title?: string;
        searchDepth?: number;
        depth?: number;
        links?: Array<Record<string, unknown>>;
      };
    };
  };
  stem?: string;
  __hash__?: string;
};

export type TBlogPost = TBasePost & {
  id: string;
  title: string;
  description: string;
  path: string;
  date: string;
  draft?: boolean;
};

export type TCoopPost = TBasePost & {
  id: string;
  title: string;
  description: string;
  path: string;
  draft?: boolean;
  cover: string;
};

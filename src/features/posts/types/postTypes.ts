export type PostStatus = 'Published' | 'Draft' | 'Scheduled';

export interface Post {
  readonly id: string;
  readonly title: string;
  readonly excerpt: string;
  readonly content?: string;
  readonly category: string;
  readonly author: {
    readonly name: string;
    readonly avatar?: string;
  };
  readonly readTime: string;
  readonly date: string;
  readonly status: PostStatus;
  readonly likes: number;
  readonly comments: number;
}

export interface PostAuthor {
  readonly name: string;
  readonly posts: number;
  readonly avatar?: string;
}

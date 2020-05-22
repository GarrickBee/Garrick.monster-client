export interface Article {
  slug: string;
  title: string;
  meta: string;
  author: string;
  like: number;
  description: string;
  keywords: string;
  body: string;
  tagList: string[];
  origin: string;
  createdAt: string;
  updatedAt: string;
  public: string;
  image: {
    api: string;
    path: string;
    file: string;
  }







}
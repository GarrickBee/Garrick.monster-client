export interface ArticleListConfig {
  type?: string;

  filters: {
    tag?: string,
    author?: string,
    favorited?: string,
    limit?: number,
    page?: number,
    offset?: number,
    category?: string
  };
}

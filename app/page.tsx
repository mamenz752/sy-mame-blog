'use client';

import { useEffect, useState } from 'react';
import { client } from './libs/client';
import BlogItem from './components/BlogItem';

interface Image {
  url: string;
  height: string | number;
  width: string | number;
}

interface Article {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  topImage: Image;
  title: string;
  body: string;
  categories: string[];
}

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const data: Article[] = await client.getAllContents({ endpoint: 'blog' });
      setArticles(data);
    };
    fetchArticles();
  }, []);

  return (
    <main className="py-8">
      <ul className="grid grid-cols-3 gap-6">
        {articles.map((article: Article) => (
          <BlogItem
            key={article.id}
            id={article.id}
            createdAt={article.createdAt}
            updatedAt={article.updatedAt}
            publishedAt={article.publishedAt}
            revisedAt={article.revisedAt}
            topImage={article.topImage}
            title={article.title}
            body={article.body}
            categories={article.categories}
          />
        ))}
      </ul>
    </main>
  );
}

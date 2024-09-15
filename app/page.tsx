'use client';
import BlogItem from './components/BlogItem';
import { useEffect, useState } from 'react';

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

export const dynamic = 'force-static';

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://sy-mame-blog.microcms.io/api/v1/blog', {
      headers: {
        'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_API_KEY || '',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('レスポンスが正常ではありませんでした。');
        }
        return res.json();
      })
      .then((data) => {
        setArticles(data.contents);
        setIsLoading(false);
      })
      .catch((error) => console.log('Error occured:', error));
  }, []);

  return isLoading === true ? (
    <div className="py-8">
      <p>Loading...</p>
    </div>
  ) : (
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

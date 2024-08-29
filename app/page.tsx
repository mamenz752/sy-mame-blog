import { client } from './libs/client';
import BlogItem from './components/BlogItem';
import { useQuery } from '@tanstack/react-query';

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

export default async function Home() {
  const articles = await client.getAllContents({ endpoint: 'blog' });

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

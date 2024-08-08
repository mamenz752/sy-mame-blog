import { client } from '../libs/client';
import BlogItem from './components/BlogItem';

interface Image {
  url: string;
  height: number;
  width: number;
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
  categories: string;
}

export default async function Home(): Promise<JSX.Element> {
  const data = await client.get({ endpoint: 'blog' });
  const articles: Article[] = data.contents;

  return (
    <main className="grid grid-cols-3 justify-between py-8">
      <ul>
        {articles.map((article: Article, item: number) => (
          <BlogItem
            key={item}
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

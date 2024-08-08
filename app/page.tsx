import { GetStaticProps } from 'next';
import { client } from '../libs/client';

interface Article {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  topImage: string;
  title: string;
  body: string;
  categories: string;
}

export default async function Home() {
  const data = await client.get({ endpoint: 'blog' });
  const articles = data.contents;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {articles.map((article: Article) => (
          <li key={article.id}>
            <a href="">{article.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}

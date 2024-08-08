import { client } from '../libs/client';
import BlogItem from './components/BlogItem';

export default async function Home(): Promise<JSX.Element> {
  const data = await client.getAllContentIds({ endpoint: 'blog' });
  const articles = data;
  console.log(data);

  return (
    <main className="py-8">
      <ul className="grid grid-cols-3 gap-6">
        {articles.map((article: string, item: number) => (
          <BlogItem key={item} id={article} />
        ))}
      </ul>
    </main>
  );
}

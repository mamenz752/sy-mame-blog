import { client } from '../../libs/client';
import BlogItem from '../components/BlogItem';

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
  categories: string[];
}

export default async function Home() {
  const data = await client.getAllContents({ endpoint: 'blog' });
  const filteredData = data.filter((item: Article, i) =>
    item.categories.some((category) => category === '雑談'),
  );

  return (
    <main className="my-4">
      <h2 className="py-4 font-bold text-xl tracking-wider">雑談の記事一覧</h2>
      <ul className="grid grid-cols-3 gap-6">
        {filteredData.map((item: Article, i) => (
          <BlogItem key={i} id={item.id} />
        ))}
      </ul>
    </main>
  );
}

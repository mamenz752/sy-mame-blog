import { client } from '../libs/client';
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

export const dynamic = 'force-static';

export default async function Home() {
  const data = await client.getAllContents({ endpoint: 'blog' });
  const filteredData = data.filter((item: Article, i) =>
    item.categories.some((category) => category === 'Web技術関連'),
  );

  return (
    <main className="my-4">
      <h2 className="py-4 font-bold text-xl tracking-wider">
        Web技術関連の記事一覧
      </h2>
      <ul className="grid grid-cols-3 gap-6">
        {filteredData.map((item: Article, i) => (
          <BlogItem
            key={item.id}
            id={item.id}
            createdAt={item.createdAt}
            updatedAt={item.updatedAt}
            publishedAt={item.publishedAt}
            revisedAt={item.revisedAt}
            topImage={item.topImage}
            title={item.title}
            body={item.body}
            categories={item.categories}
          />
        ))}
      </ul>
    </main>
  );
}

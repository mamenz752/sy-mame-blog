import { client } from '@/app/libs/client';
import Image from 'next/image';
import React from 'react';
import parse from 'html-react-parser';
import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';

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

const Blog = async ({ params }: { params: { id: string } }) => {
  const data: Article = await client.get({
    endpoint: 'blog',
    contentId: params.id,
  });

  const updatedAt = dayjs(data.updatedAt).locale(ja);
  const formattedUpdatedAt = updatedAt.format('YYYY-MM-DD HH:mm');

  return (
    <main className="my-12">
      <div className="border border-gray-500">
        <Image
          src={data.topImage.url}
          alt="topImage"
          width={data.topImage.width}
          height={data.topImage.height}
          className="mx-auto"
        />
      </div>
      <p className="text-right text-gray-500 my-4">{formattedUpdatedAt}</p>
      <h2 className="h-12 my-4 font-bold text-2xl">{data.title}</h2>
      <div className="text-right">
        <p className="inline-block text-sm tracking-wider bg-black text-white mt-2 p-4">
          {data.categories}
        </p>
      </div>
      <article className="api-article">{parse(data.body)}</article>
    </main>
  );
};

export default Blog;

'use client';
import Image from 'next/image';
import parse from 'html-react-parser';
import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
import { useState, useEffect } from 'react';

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

const Blog = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<Article | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const requestParams = {
      ids: params.id,
    };
    const query = new URLSearchParams(requestParams).toString();
    fetch(`https://sy-mame-blog.microcms.io/api/v1/blog?${query}`, {
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
        setData(data.contents[0]);
        setIsLoading(false);
      })
      .catch((error) => console.log('Error occured:', error));
  }, [params.id]);

  const updatedAt = dayjs(data?.updatedAt).locale(ja);
  const formattedUpdatedAt = updatedAt.format('YYYY-MM-DD HH:mm');

  return isLoading ? (
    <div className="py-8">
      <p>Loading...</p>
    </div>
  ) : (
    <main className="my-12">
      <div className="border border-gray-500">
        <Image
          src={data?.topImage?.url || ''}
          alt="topImage"
          width={data?.topImage?.width || 0}
          height={data?.topImage?.height || 0}
          className="mx-auto"
        />
      </div>
      <p className="text-right text-gray-500 my-4">{formattedUpdatedAt}</p>
      <h2 className="h-12 my-4 font-bold text-2xl">{data?.title}</h2>
      <div className="text-right">
        <p className="inline-block text-sm tracking-wider bg-black text-white mt-2 p-4">
          {data?.categories}
        </p>
      </div>
      <article className="api-article">{parse(data?.body || '')}</article>
    </main>
  );
};

export default Blog;

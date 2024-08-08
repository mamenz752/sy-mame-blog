import { client } from '@/libs/client';
import Image from 'next/image';
import React, { FC } from 'react';
import parse from 'html-react-parser';

const Blog = async ({ params }: { params: { id: string } }) => {
  const data = await client.get({ endpoint: 'blog', contentId: params.id });

  return (
    <main className="my-12">
      {/* <p></p> */}
      <div className="border border-gray-500">
        <Image
          src={data.topImage.url}
          alt="topImage"
          width={data.topImage.width}
          height={data.topImage.height}
          className="mx-auto"
        />
      </div>
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

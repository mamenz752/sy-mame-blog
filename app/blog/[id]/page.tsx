import { client } from '@/libs/client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const pages = async ({ params }: { params: { id: string } }) => {
  const data = await client.get({ endpoint: 'blog', contentId: params.id });

  return (
    <li>
      <Link href={`blog/${data.id}`} className="hover:opacity-50">
        <div className="border border-gray-500">
          <Image
            src={data.topImage.url}
            alt="topImage"
            width={data.topImage.width}
            height={data.topImage.height}
          />
        </div>
        <h2 className="h-12 my-4 font-bold text-md">{data.title}</h2>
        <div className="text-right">
          <p className="inline-block text-sm tracking-wider bg-black text-white mt-2 p-4">
            {data.categories}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default pages;

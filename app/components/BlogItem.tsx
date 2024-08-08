import Link from 'next/link';
import Image from 'next/image';
import React, { FC } from 'react';
import { client } from '@/libs/client';

type Props = {
  id: string;
};

const BlogItem: FC<Props> = async (props: Props) => {
  const data = await client.get({ endpoint: 'blog', contentId: props.id });
  const article = data.contents;
  console.log(data);

  return (
    <li>
      <Link href="/" className="hover:opacity-50">
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

export default BlogItem;

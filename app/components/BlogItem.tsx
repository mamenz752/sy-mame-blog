import Link from 'next/link';
import Image from 'next/image';
import React, { FC } from 'react';

interface Image {
  url: string;
  height: number;
  width: number;
}

type Props = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  topImage: Image;
  title: string;
  body: string;
  categories: string;
};

const BlogItem: FC<Props> = (props: Props) => {
  return (
    <Link href="/" className="hover:opacity-50">
      <div className="border border-gray-500">
        <Image
          src={props.topImage.url}
          alt="topImage"
          width={props.topImage.width}
          height={props.topImage.height}
        />
      </div>
      <h2 className="my-4 font-bold text-md">{props.title}</h2>
      <div className="text-right">
        <p className="inline-block text-sm tracking-wider bg-black text-white mt-2 p-4">
          {props.categories}
        </p>
      </div>
    </Link>
  );
};

export default BlogItem;

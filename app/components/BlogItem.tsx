'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react';

interface Image {
  url: string;
  height: string | number;
  width: string | number;
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

type Props = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  topImage: Image;
  title: string;
  body: string;
  categories: string[];
};

const BlogItem: FC<Props> = (props: Props) => {
  // const [article, setArticle] = useState<Article>({
  //   id: "",
  //   createdAt: "",
  //   updatedAt: "",
  //   publishedAt: "",
  //   revisedAt: "",
  //   topImage: {
  //     url: "",
  //     height: NaN,
  //     width: NaN,
  //   },
  //   title: "",
  //   body: "",
  //   categories: [""]
  // });

  // const fetchArticle = async () => {
  //   const data = await client.get({ endpoint: 'blog', contentId: props.id });
  //   setArticle(data);
  // }

  // useEffect(() => {
  //   fetchArticle();
  // }, [ props.id ]);

  const width = Number(props.topImage.width);
  const height = Number(props.topImage.height);

  return (
    <li>
      <Link href={`blog/${props.id}`} className="hover:opacity-50">
        <div className="border border-gray-500">
          <Image
            src={props.topImage.url}
            alt="topImage"
            width={width}
            height={height}
          />
        </div>
        <h2 className="h-12 my-4 font-bold text-md">{props.title}</h2>
        <div className="text-right">
          <p className="inline-block text-sm tracking-wider bg-black text-white mt-2 p-4">
            {props.categories}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default BlogItem;

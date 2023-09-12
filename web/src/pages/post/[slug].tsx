import { FiCalendar } from "react-icons/fi";
import React from 'react'
import client from "../../../client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { url } from "@/util/util";
import Desc from "@/components/desc";
import Head from "next/head";

function urlFor(source: any) {
  return imageUrlBuilder(client).image(source);
}

type postProps = {
  post: {
    _id: string;
    title: string;
    slug: string;
    body: [];
    categories: [];
    mainImage: string;
    publishedAt: string;
  }[],
};
export default function Review({ post }: postProps) {
  return (
    <article className="mx-auto px-4 max-w-screen-lg">
      <Head>
        <title>Film Blog</title> 
      </Head>
      {post && post.map((data) => (
        <React.Fragment key={data._id}>
          <header>
            <div className="relative pt-2 flex w-full h-[465px]">
              <Image
                src={urlFor(data.mainImage).url()}
                alt={data.title}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="font-bold text-3xl mt-4 capitalize">
              {data.title}
            </h2>
            <div className="flex items-center py-6 space-x-4">
              {data.categories.map((category, i) => (
                <p
                  key={i}
                  className="bg-blue-700 text-white text-sm p-2">
                  {category}
                </p>
              ))}
              <div className="flex items-center space-x-2">
                <FiCalendar />
                <span>
                  {new Date(data.publishedAt).toLocaleString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </header>

          <section className="leading-relaxed text-base pt-4 pb-8">
            <Desc body={data.body} />
          </section>
        </React.Fragment>
      ))}
    </article>
  );
}

export const getStaticPaths = async () => {
  const post = await client.fetch(
    `*[_type == "post"]{
          "slug": slug.current
    }`
  );
  const paths = post.map((slug: {}) => ({ params: slug }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context: any) => {
  const { slug } = context.params;
  const post = await client.fetch(
    `*[_type == "post" && slug.current == '${slug}']${url}`
  );
  return {
    props: { post }, revalidate: 30
  };
};

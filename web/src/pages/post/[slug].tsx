import { FiCalendar } from "react-icons/fi";
import React from 'react'
import client from "../../../client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { postProps, url } from "@/util/util";
import Desc from "@/components/desc";
import Head from "next/head";

function urlFor(source: any) {
  return imageUrlBuilder(client).image(source);
}

export default function Review({ posts }: postProps) {
  return (
    <article className="mx-auto px-4 max-w-screen-lg">
      <Head>
        <title>Film Blog</title> 
      </Head>
      {posts && posts.map((data) => (
        <React.Fragment key={data._id}>
          <header>
            <div className="relative pt-2 flex w-full h-[250px] sm:h-[465px]">
              <Image
                src={urlFor(data.mainImage).url()}
                alt={data.title}
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8f/NmPQAIQgMSKTWG2wAAAABJRU5ErkJggg=="
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
  const posts = await client.fetch(
    `*[_type == "post" && slug.current == '${slug}']${url}`
  );
  return {
    props: { posts }, revalidate: 30
  };
};

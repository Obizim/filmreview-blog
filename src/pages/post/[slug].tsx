import { FiCalendar } from "react-icons/fi";
import client from "../../../client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { url } from "@/util/util";

function urlFor(source: any) {
    return imageUrlBuilder(client).image(source);
  }

const pt = {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <Image
            alt={value.alt || "A random work cover"}
            loading="lazy"
            src={urlFor(value).auto("format").url()}
            width={450}
            height={450}
            style={{objectFit:"cover", maxHeight: "450px"}}
          />
        );
      },
    },
  };
  
type postProps = {
    post: {
        _id: string,
        title: string,
        slug: string,
        body: [],
        categories: [],
        mainImage: string,
        publishedAt: string
    }[]
  }
export default function Review({post}: postProps) {
    return <div className="mx-auto px-4 max-w-screen-lg">
        <header>
          <div className="relative pt-2 flex">
            <Image src={urlFor(post[0].mainImage).url()} alt={post[0].title} width={880} height={150} style={{objectFit:"cover", maxHeight: "450px"}}
 />
          </div>
        <h2 className="font-bold text-3xl mt-4">{post[0].title}</h2>
            <div className="flex items-center py-6 space-x-4">
            {post[0].categories.map((category, i) => <p key={i} className="bg-red-600 text-white p-1 text-sm rounded">{category}</p>)}
            <div className='flex items-center space-x-2'><FiCalendar /> <span>{new Date(post[0].publishedAt).toLocaleString('en-GB', {day:'numeric', month: 'long', year:'numeric'})}</span></div>
            </div>
        </header>

        <section className="leading-loose text-base pt-4 pb-8">
            <PortableText value={post[0].body} components={pt} />
        </section>
    </div>
}

export const getStaticPaths = async () => {
    const post = await client.fetch(
      `*[_type == "post"]{
          "slug": slug.current
    }`)
    const paths = post.map((slug: {}) => ({ params: slug}))
    return {
      paths,
      fallback: true,
    }
  }

export const getStaticProps = async (context: any) => {
    const { slug } = context.params
    const post = await client.fetch(`*[_type == "post" && slug.current == '${slug}']${url}`)
    return {
        props: { 
            post,
            revalidate: 10 
         }
    }
}
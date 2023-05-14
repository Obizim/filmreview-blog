import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar } from 'react-icons/fi'
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import client from '../../client';

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
  posts: {
    _id: string,
    publishedAt: string,
    title: string,
    slug: string,
    body: []
    categories: string[]
  }[]
}

export const Card = ({posts}: postProps) => {
  return (
    <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post ) => <Link key={post._id} href={`/post/${post.slug}`}><div className="py-6 px-4 border border-gray-600 rounded-lg">
        <header className="flex font-light text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-90 -ml-2" viewBox="0 0 24 24" stroke="#b91c1c">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
          </svg>
          {post.categories.map((category, i) => <p key={i} className="uppercase">{category}</p>)}
        </header>

        <h2 className="font-bold text-3xl mt-2 capitalize">
          {post.title}
        </h2>
        <section className="leading-loose text-base py-8 font-light pt-4 line-clamp-2">
            <PortableText value={post.body} components={pt}/>
        </section>

        <div className='flex items-center space-x-2 pt-4'><FiCalendar /> <span>May 6 2021</span></div>
      </div></Link>)}
  
    </div>
  );
};

import Link from 'next/link';
import React from 'react';
import { FiCalendar } from 'react-icons/fi'
import imageUrlBuilder from "@sanity/image-url";
import client from '../../client';
import { Desc } from './desc';

function urlFor(source: any) {
  return imageUrlBuilder(client).image(source);
}

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
        {posts.map((post ) => <React.Fragment key={post._id}><Link href={`/post/${post.slug}`}><div className="py-6 px-4 border border-gray-600 rounded-lg">
        <header className="flex font-light text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-90 -ml-2" viewBox="0 0 24 24" stroke="#b91c1c">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
          </svg>
          {post.categories.map((category, i) => <p key={i} className="uppercase">{category}</p>)}
        </header>

        <h2 className="font-bold text-3xl mt-2 capitalize line-clamp-3">
          {post.title}
        </h2>
        <section className="leading-relaxed text-base pt-4 font-light">
          <div className='hide-img line-clamp-3'>
          <Desc body={post.body}/>
          </div>
        </section>

        <div className='flex items-center space-x-2 pt-2'><FiCalendar /> <span>May 6 2021</span></div>
      </div></Link></React.Fragment>)}
  
    </div>
  );
};

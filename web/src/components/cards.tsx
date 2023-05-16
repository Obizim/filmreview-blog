import Link from 'next/link';
import React from 'react';
import { FiCalendar } from 'react-icons/fi'
import  Desc  from './desc';

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
   <ul className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {posts.map((post) => (
    <li key={post._id} className="py-6 px-4 border border-gray-600 rounded-lg">
      <Link href={`/post/${post.slug}`}>
          <div className="flex font-light text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-90 -ml-2" viewBox="0 0 24 24" stroke="#b91c1c">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
            </svg>
            {post.categories.map((category, i) => (
              <p key={i} className="uppercase">{category}</p>
            ))}
          </div>
          <h2 className="font-bold text-3xl mt-2 capitalize line-clamp-3">{post.title}</h2>
          <div className="leading-relaxed text-base pt-4">
            <div className='hide-img line-clamp-3'>
              <Desc body={post.body} />
            </div>
          </div>
          <div className='flex items-center space-x-2 pt-2'>
            <FiCalendar /> <span>{new Date(post.publishedAt).toLocaleString('en-GB', {day:'numeric', month: 'long', year:'numeric'})}</span>
          </div>
      </Link>
    </li>
  ))}
</ul>
  );
};

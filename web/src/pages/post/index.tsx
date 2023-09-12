import { Card } from "@/components/cards"
import { fetch, postProps } from "@/util/util"
import Head from "next/head"
import { useState } from "react"

export default function Post({posts}: postProps){

    const [category, setCategory] = useState('')

    const filter = () => {
      if(category === 'all') {
        return posts
    }else if(category === 'movie') {
      return posts.filter(post => post.categories.includes('movie'))
    }else if(category === 'tv series'){
      return posts.filter(post => post.categories.includes('tv series'))
    }
    return posts
  }

    return <section className="mx-auto px-4 max-w-screen-lg">
      <Head>
        <title>Film Blog - Posts</title>
      </Head>
      <div className="flex items-center justify-between mt-8">
        <h2 className="font-semi-bold text-2xl border-b border-gray-600 max-w-max">All Posts</h2>
        <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded">
          <option value="all">All</option>
          <option value="movie">Movie</option>
          <option value="tv series">Tv series</option>
        </select>
      </div>
        <Card posts={filter()} />
        </section>
}

export const getStaticProps = async () =>{
    const posts = await fetch()
    if(!posts || !posts.length) {
      return {
        props: {posts: []}
      }
    }else {
      return {
        props: {posts}, revalidate: 30 
      }
    }
  }
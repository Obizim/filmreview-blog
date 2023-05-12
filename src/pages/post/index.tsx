import { Card } from "@/components/cards"
import { fetch } from "@/util/util"

type postsProps = {
    posts: []
  }

export default function Post({posts}: postsProps){
    return <section className="mx-auto px-4 max-w-screen-lg">
        <h2 className="font-semi-bold text-2xl pt-8 border-b border-gray-600 max-w-max">All Posts</h2>
        <Card posts={posts} />
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
        props: {
          posts,
          revalidate: 10 
        }
      }
    }
  }
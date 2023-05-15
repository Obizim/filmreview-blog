import { FiCalendar } from "react-icons/fi";
import client from "../../../client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { url } from "@/util/util";
import { Desc } from "@/components/desc";

function urlFor(source: any) {
    return imageUrlBuilder(client).image(source);
  }
  
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
    return <article className="mx-auto px-4 max-w-screen-lg">
        <header>
          <div className="relative pt-2 flex">
            <Image src={urlFor(post[0].mainImage).url()} alt={post[0].title} width={880} height={150} style={{objectFit:"cover", maxHeight: '450px', maxWidth: 'auto'}}
 />
          </div>
        <h2 className="font-bold text-3xl mt-4 capitalize">{post[0].title}</h2>
            <div className="flex items-center py-6 space-x-4">
            {post[0].categories.map((category, i) => <p key={i} className="bg-red-600 text-white p-1 text-sm rounded">{category}</p>)}
            <div className='flex items-center space-x-2'><FiCalendar /> <span>{new Date(post[0].publishedAt).toLocaleString('en-GB', {day:'numeric', month: 'long', year:'numeric'})}</span></div>
            </div>
        </header>

        <section className="leading-relaxed text-base pt-4 pb-8">
          <Desc body={post[0].body}/>
        </section>
    </article>
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
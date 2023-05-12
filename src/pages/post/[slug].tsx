import { FiCalendar } from "react-icons/fi";
import client from "../../../client";

export default function Review({post}) {
    console.log(post);
    
    return <div className="mx-auto px-4 max-w-screen-lg">
        <header>
        <h2 className="font-bold text-3xl mt-4">Rapid Event Notification System at Netflix</h2>
            <div className="flex items-center py-6 space-x-4">
            <p className="bg-red-600 text-white p-1 rounded">Tv series</p>  
            <div className='flex items-center'><FiCalendar /> <span>May 6 2021</span></div>
            </div>
        </header>

        <section className="leading-relaxed text-lg py-8">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </section>
    </div>
}

export const getStaticPaths = async () => {
    const post = await client.fetch(
      `*[_type == "post"]{
          "slug": slug.current
    }`)
    const paths = post.map((slug) => ({ params: slug}))
    return {
      paths,
      fallback: true,
    }
  }

export const getStaticProps = async (context) => {
    const { slug } = context.params
    const post = await client.fetch(`*[_type == "post" && slug.current == '${slug}']`)
    return {
        props: {post}
    }
}
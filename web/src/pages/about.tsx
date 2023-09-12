import Head from "next/head"
import HeadImg from '../assets/head.jpeg'
import Image from "next/image";
import { FiInstagram, FiMail, FiTwitter } from "react-icons/fi";

export default function About() {
  return (
    <section className="mx-auto px-4 max-w-screen-lg my-8 space-y-6">
      <Head>
        <title>Film Blog - About</title>
      </Head>
      <section className="flex flex-col sm:flex-row justify-start sm:space-x-10">
      <div className="relative w-[250px] h-[250px]">
           <Image alt='Profile Photo' loading="lazy" src={HeadImg} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8f/NmPQAIQgMSKTWG2wAAAABJRU5ErkJggg=="className="object-cover rounded" />
      </div>

        <div className="space-y-2">
          <h2 className="text-2xl mt-4">Samson Doe</h2>
          <p className="text-gray-500">Chief Editor</p>
        </div>
      </section>
      <p>
        Welcome to our blog! Here, we dive into the fascinating world of movies,
        sharing our thoughts, opinions, and insights on the latest releases,
        timeless classics, and everything in between. Whether you&lsquo;re a
        cinephile, casual moviegoer, or simply looking for some entertainment
        recommendations, you&lsquo;ve come to the right place. Our team of passionate
        film enthusiasts is dedicated to bringing you engaging content that
        celebrates the magic of cinema. From thought-provoking reviews and
        in-depth analyses to captivating interviews and behind-the-scenes
        glimpses, we strive to create a space where movie lovers can come
        together to discuss and celebrate the art of storytelling on the silver
        screen.
      </p>

      <section>
        <h2 className="text-xl">Contact</h2>
        <ul className='flex flex-col space-y-2 pt-3'>
                <li className="flex items-center space-x-2"><FiMail /> <span>obizimuzo@gmail.com</span></li>
                <li className="flex items-center space-x-2"><FiTwitter /><span> Twitter</span></li>
                <li className="flex items-center space-x-2"> <FiInstagram /><span> Instagram</span></li>
            </ul>
      </section>
    </section>
  );
}

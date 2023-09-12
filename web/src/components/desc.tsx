import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import client from "../../client";
import dynamic from "next/dynamic";

function urlFor(source: any) {
    return imageUrlBuilder(client).image(source);
  }

const pt: PortableTextComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <div className="container mx-auto max-w-screen-md relative my-4 w-full h-[200px] sm:h-[350px]">
            <Image
              alt={value.alt || "Image Poster"}
              loading="lazy"
              src={urlFor(value).auto("format").url()}
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8f/NmPQAIQgMSKTWG2wAAAABJRU5ErkJggg=="
              className="object-cover"
            />
          </div>
        );
      }
    },
      block: {
        h1: ({children}) => <h1 className="text-3xl py-2">{children}</h1>,
        h2: ({children}) => <h2 className="text-2xl py-2">{children}</h2>,
        h3: ({children}) => <h3 className="text-xl py-2">{children}</h3>,
        h4: ({children}) => <h4 className="text-lg py-2">{children}</h4>,
        h5: ({children}) => <h5 className="text-base py-2">{children}</h5>,
        h6: ({children}) => <h6 className="text-base py-2">{children}</h6>,
        blockquote: ({children}) => <blockquote className="p-4 border-l-4 border-gray-600 bg-gray-100 rounded italic">{children}</blockquote>,
      },
      list: {
          number: ({children}) => <ol className="list-decimal mx-10">{children}</ol>,
          bullet: ({children}) => <ul className="list-disc mx-10">{children}</ul>,
      },

      marks: {
        em: ({children}) => <em>{children}</em>,
        link: ({value, children}) => {
          const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
          return (<span><a href={value?.href} className="text-blue-500 underline" target={target}>{children}</a></span>
          )
        },
      },
  };


type bodyProp = {
    body: []
}
const Desc = ({body}: bodyProp) => {
    return <PortableText value={body} components={pt}/>
}

export default dynamic(() => Promise.resolve(Desc), {ssr: false})
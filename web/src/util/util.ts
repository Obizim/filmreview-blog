import client from "../../client";

export const url = `{_id, title, publishedAt,
  "slug": slug.current, body, 
  "categories": categories[]->title,
   'mainImage': mainImage {
      asset->{id,url}
    }}`

export function fetch() {
  const posts = client.fetch(
    `*[_type == "post"]${url}`
  );

  return posts;
}

export type postProps = {
  posts: {
    _id: string,
    publishedAt: string,
    title: string,
    slug: string,
    mainImage: string;
    body: []
    categories: string[]
  }[]
}
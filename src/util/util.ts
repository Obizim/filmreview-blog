import client from "../../client";

export const url = `{_id, title, publishedAt,
  "slug": slug.current, body, 
  "categories": categories[]->title,
   'mainImage': mainImage {
      asset->{_id,url}
    }}`

export function fetch() {
  const posts = client.fetch(
    `*[_type == "post"]${url}`
  );

  return posts;
}

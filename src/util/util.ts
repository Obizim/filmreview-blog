import client from "../../client";

export function fetch() {
  const posts = client.fetch(
    `*[_type == "post"]{_id, title, publishedAt, "slug": slug.current, body, "categories": categories[]->title}`
  );

  return posts
}

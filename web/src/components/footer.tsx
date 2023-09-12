import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <section className="mx-auto px-4 max-w-screen-lg flex flex-col items-center">
        <ul className="flex space-x-4">
            <Link href="/post"><li>Posts</li></Link>
            <Link href="/about"><li>About</li></Link>
        </ul>
        <p>&copy; All rights reserved; Film Blog</p>
      </section>
    </footer>
  );
};

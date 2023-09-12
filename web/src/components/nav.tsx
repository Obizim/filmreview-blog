import Link from "next/link"

export const Nav = () => {
    return <header>
        <nav className="flex justify-between items-center pt-6 px-4 mx-auto max-w-screen-lg">
        <Link href="/"><h1 className="self-center text-2xl font-semibold whitespace-nowrap">Film Blog</h1></Link>
            <ul className={`flex justify-between items-center p-6 space-x-6`}>
                <Link href="/post"><li>Posts</li></Link>
                <Link href="/about"><li>About</li></Link>
            </ul>
        </nav>
    </header>
}
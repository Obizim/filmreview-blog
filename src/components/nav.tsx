import Link from "next/link"
import { useState } from 'react'
import { FiSearch } from "react-icons/fi"

export const Nav = () => {
    const [toggle, setToggle] = useState(false)

    return <header>
        <nav className="flex justify-between items-center pt-6 px-4 mx-auto max-w-screen-lg border-b border-b-gray-600">
        <Link href="/"><h1 className="self-center text-2xl font-semibold whitespace-nowrap">CFR__</h1></Link>
            <ul className={`flex justify-between items-center p-6 space-x-6`}>
                <FiSearch className="cursor-pointer" onClick={() => setToggle(!toggle)} />
                <Link href="/about"><li>About us</li></Link>
            </ul>
        </nav>

        <div className={`relative mt-3 mx-auto max-w-screen-lg px-2 ${toggle ? 'block' : 'hidden'}`}>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FiSearch className="w-5 h-5 text-gray-500" />
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 border border-gray-600 rounded bg-transparent focus:outline-dotted" placeholder="Search..." />
      </div>
    </header>
}
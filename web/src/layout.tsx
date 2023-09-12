import { Josefin_Sans } from 'next/font/google'
import { Nav } from "./components/nav"
import { Footer } from './components/footer'
import NewsLetter from './components/newsletter'

const dmSans = Josefin_Sans({ subsets: ['latin'], weight: "400" })
type bodyProps = {
    children: React.ReactNode
}

export default function Layout ({children}: bodyProps) {
    return <section className={`${dmSans.className}`}>
        <Nav />
        <main>{children}</main>
        <NewsLetter />
        <Footer />
    </section>
}
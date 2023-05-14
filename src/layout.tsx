import { Fira_Sans } from 'next/font/google'
import { Nav } from "./components/nav"
import { Footer } from './components/footer'

const marcellus = Fira_Sans({ subsets: ['latin'], weight: "400" })
type bodyProps = {
    children: React.ReactNode
}

export default function Layout ({children}: bodyProps) {
    return <section className={`${marcellus.className}`}>
        <Nav />
        <main>{children}</main>
        <Footer />
    </section>
}
type bodyProps = {
    children: React.ReactNode
}

export default function Layout ({children}: bodyProps) {
    return <section>
        {/* //Navbar */}
        <main>{children}</main>
        {/* //Footer */}
    </section>
}
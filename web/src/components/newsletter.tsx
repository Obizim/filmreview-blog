import { FiMail } from "react-icons/fi"

const NewsLetter = () => {
    return <section className="bg-gray-100 mx-auto px-4 max-w-screen-md my-6 space-y-6 py-6 rounded-lg">
        <div className="flex flex-col items-center justify-center text-center space-y-2 ">
            <div className="bg-gray-200 p-6 w-max rounded-full">
                <FiMail />
            </div>
            <h2 className="text-xl">Subscribe to our Newsletter</h2>
            <p>We will write rarely and only high-quality content.</p>

            <form className="flex flex-wrap justify-center space-y-2">
                <input type="email" required placeholder="Enter your Email Address" className="border p-4 w-full rounded" />
                <button type="submit" className="hover:underline">Subscribe</button>
            </form>
        </div>
    </section>
}

export default NewsLetter
import { FiTwitter, FiGithub, FiInstagram } from 'react-icons/fi'
export const Footer = () => {
    return <footer className="bg-gray-800 text-white py-6 mt-2 sm:mt-24">
        <section className="mx-auto px-4 max-w-screen-lg">
        <h1 className="text-3xl underline mt-10">Contact Us </h1>
        <div className="flex flex-wrap space-y-4 md:space-y-0 justify-between items-center py-4">
            <div>
                <p>Want to get in touch? I&lsquo;d love to hear from you. Here is how you can reach me.</p>   
                <span className="underline">obdso@gmail.com</span>
            </div>
            <div>
            <h1 className="text-xl underline">Social Accounts </h1>
            <ul className='flex flex-col space-y-2 pt-3'>
                <li className="flex items-start justify-between"><p>Twitter</p> <FiTwitter /> </li>
                <li className="flex items-start justify-between"><p>Instagram</p> <FiInstagram /> </li>
                <li className="flex items-start justify-between"><p>Github</p> <FiGithub /> </li>
            </ul>
            </div>
        </div>

        </section>
    </footer>
}
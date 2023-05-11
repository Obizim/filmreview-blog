import Link from 'next/link';
import { FiCalendar } from 'react-icons/fi'

const data = [
    {
        "id": 1,
        "title": "Guide to Protecting Your Startup from Legal Risks",
        "image": "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      },
      {
        "id": 2,
        "title": "Interview: Getting a job after graduation",
        "image": "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        "id": 3,
        "title": "Optimizing your resume",
        "image": "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
      },
      {
        "id": 4,
        "title": "Optimizing your resume",
        "image": "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
      },
      {
        "id": 5,
        "title": "Optimizing your resume",
        "image": "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      },
      {
        "id": 6,
        "title": "Optimizing your resume",
        "image": "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      }
]


export const Card = () => {
  return (
    <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((post ) => <Link href={`/review/${post.id}`}><div className="py-6 px-4 border border-gray-600 rounded-lg">
        <header className="flex font-light text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-90 -ml-2" viewBox="0 0 24 24" stroke="#b91c1c">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
          </svg>
          <p className="uppercase">Tv series</p>
        </header>

        <h2 className="font-bold text-3xl mt-2">
          Rapid Event Notification System at Netflix
        </h2>
        <p className="font-light pt-4 truncate">
          Netflix has more than 220 million active members who perform a variety
          of actions throughout each session, ranging from renaming a profile to
          watchi...
        </p>

        <div className='flex items-center justify-end pt-4'><FiCalendar /> <span>May 6 2021</span></div>
      </div></Link>)}
  
    </div>
  );
};

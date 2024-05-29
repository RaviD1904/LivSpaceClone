
import Link from 'next/link'

const BottomNavigation = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <div className="flex justify-around py-2">
          <Link href="/" className="flex flex-col items-center text-red-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7m-9 14v-8a4 4 0 018 0v8"
              />
            </svg>
            <span className="text-xs">Home</span>
         
        </Link>
       
          <Link href="/design-ideas" className="flex flex-col items-center text-gray-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v11a2 2 0 002 2z"
              />
            </svg>
            <span className="text-xs">Design Ideas</span>
         
        </Link>
       
          <Link href="/lets-begin" className="flex flex-col items-center text-red-500">
            <div className="bg-red-500 p-2 rounded-full">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M12 18.5a9.5 9.5 0 100-19 9.5 9.5 0 000 19z"
                />
              </svg>
            </div>
            <span className="text-xs">Let's Begin</span>
          </Link>
        
       
          <Link href="/get-estimate" className="flex flex-col items-center text-gray-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 14l2 2 4-4m5-2a9 9 0 11-6-2.29"
              />
            </svg>
            <span className="text-xs">Get Estimate</span>
          </Link>
       
 
          <Link href="/more" className="flex flex-col items-center text-gray-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6l4 2"
              />
            </svg>
            <span className="text-xs">More</span>
          </Link>
        
      </div>
    </nav>

  )
}

export default BottomNavigation
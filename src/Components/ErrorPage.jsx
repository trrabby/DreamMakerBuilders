import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'



export default function ErrorPage() {
  return (
    <div>
      <Helmet>
        <title>Fiber Fution | Error Page</title>
      </Helmet>
      
      <div role="alert" className="alert w-full mx-auto min-h-[calc(100vh-160px)] bg-contain bg-center bg-[url('https://i.ibb.co/SmJfrps/shutterstock-774749455.jpg')] rounded-lg mb-5 mt-5 flex flex-col items-center justify-end text-center gap-4 ">
        <Link to={'/'} className='btn btn-outline outline-error'>Return To Home Page</Link>
      </div>
      
    </div>
  )
}

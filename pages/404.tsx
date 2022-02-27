import React from 'react'
import Navbar from './components/Feed/Navbar/NavbarFeedMain'
import Head from 'next/head'
import Link from 'next/link'

const errorPage: React.FC = () => {
    return (
        <React.Fragment>
            <Head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="/logo Bg.png" type="image/x-icon" />
                <title>Error 404 Not Found</title>
            </Head>
            < Navbar />
            <div className='bg-slate-900 h-[90.9vh] flex flex-col items-center justify-center landing-bg '>
               <p className='text-7xl font-bold text-gray-200 text-center'>404 - Not Found</p>
               <p className='text-white py-5 text- text-center'>There is a person who always goes to wrong URL. </p> 
               <p className='text-white text-3xl text-center'>Guess the Person!!🧐🤔</p>
               <Link href="/">
               <button className='my-10 px-6 py-2 rounded-full bg-blue-400 hover:bg-blue-600 hover:scale-105 active:scale-95 text-xl font-bold text-white transition-all'>Back to Home</button>
               </Link>
            </div>
        </React.Fragment>
    )
}

export default errorPage
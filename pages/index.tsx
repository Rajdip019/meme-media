import React from "react"
import Head from "next/head"
import Navbar from "./components/Feed/Navbar/NavbarFeedMain"
import Link from "next/link"

export default function Home(): React.ReactNode {

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/logo Bg.png" type="image/x-icon" />
        <title>MemeMedia</title>
      </Head>
      <Navbar />
      <div className="bg-slate-900 h-[90.9vh] flex flex-col items-center justify-center landing-bg ">
        <p className="text-5xl text-gray-100 font-bold text-center w-11/12 mt-5">The Best platform to find and enjoy Memes.</p>
        <p className="text-xl text-gray-400 py-5 text-center">"You have only on life be a meme lover and relax"</p>
        <div className="flex pt-10 flex-wrap">
          <Link href="/feed/mememedia">
          <button className=" px-6 py-2 border-4 border-blue-400 text-gray-100 hover:bg-blue-600 hover:border-blue-600 rounded-full font-semibold mx-5 text-xl hover:sclale-105 active:scale-95 transition-all">Meme Media Special Memes</button>
          </Link>
          <Link href="/feed/memes">
          <button className="mt-5 sm:mt-auto px-6 py-2 bg-blue-400 rounded-full font-semibold mx-5 text-xl text-white hover:sclale-105 active:scale-95 transition-all hover:bg-blue-600">Latest Memes</button>
          </Link>
        </div>
      </div>
    
    </>
  )
}




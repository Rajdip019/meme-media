import React from "react"
import Head from "next/head"

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
      <p className="text-gray-100 text-7xl font-bold flex justify-center items-center h-screen w-screen bg-slate-900">This is going to be Meme Media</p>
    </>
  )
}




import React from 'react';
import NavBar from "./components/Feed/Navbar/NavbarFeedMain"
import Head from 'next/head';

const feed: React.FC = () => {

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/logo Bg.png" type="image/x-icon" />
        <title>MemeMedia | Explore</title>
      </Head>
      <NavBar />
    </>
  );
};

export default feed;

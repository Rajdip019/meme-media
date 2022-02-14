import React from 'react';
import NavBar from "./components/Feed/Navbar/NavbarFeedMain"
import Head from 'next/head';
import Feed from './components/Feed/Main';
import { GetStaticProps } from 'next';

type Meme = Promise<JSON>

const feed: React.FC = ({meme}: any) => {
console.log(meme.data.children[5].data.author);

  return (
    <div className='bg-gray-900'>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/logo Bg.png" type="image/x-icon" />
        <title>MemeMedia | Explore</title>
      </Head>
      <NavBar />
      {meme.data.children.map((memes : any) => {
        return(
        <Feed 
        id = {memes.data.id}
        image = {memes.data.url_overridden_by_dest}
        title = {memes.data.title}
        post_hint = {memes.data.post_hint}
        author = {memes.data.author} 
        />
        )
      })}
    </div>
  );
};

export default feed;

export const getStaticProps : GetStaticProps = async () => {
  const res: Response = await fetch("http://localhost:3000/api/coding-meme");
  const data: Promise<JSON> = await res.json()
  return {
    props : {
      meme : data
    }
}
}

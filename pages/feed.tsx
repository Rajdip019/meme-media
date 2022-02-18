import React from 'react';
import NavBar from "./components/Feed/Navbar/NavbarFeedMain"
import Head from 'next/head';
import Feed from './components/Feed/Main';
import { GetServerSideProps, GetStaticProps } from 'next';
import { MemeRedditMain, MemeRedditChildern } from '../interfaces/meme-reddit';
import LeftProfileBar from './components/Feed/LeftProfileBar';
import RightNewsBar from './components/Feed/RightNewsBar/RightNewsBar';
import {template} from '../helpers/template'

const feed: React.FC<MemeRedditMain> = ({ meme }) => {

  const memeData = meme?.data?.children

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
      <div className='grid grid-cols-9 lg:w-[1240px] mx-auto'>
        <div className="col-span-2  mx-auto">
        <LeftProfileBar />
        </div>
        <div className='col-span-5 mx-auto'>
          {memeData.map((memes: MemeRedditChildern) => {
            return (
              <Feed
                id={memes?.data?.id}
                image={memes?.data?.url_overridden_by_dest}
                title={memes?.data?.title}
                post_hint={memes?.data?.post_hint}
                author={memes?.data?.author}
                reddit_page={memes.data.subreddit_name_prefixed}
                ups={memes.data.ups}
              />
            )

          })}
        </div>
        <div className='col-span-2 mx-auto sticky top-0'>
          <RightNewsBar />
        </div>
      </div>
    </div>
  );
};

export default feed;

export const getServerSideProps : GetServerSideProps = async () => {
  const { templateString } = template
  const res: Response = await fetch(`${templateString}/meme/coding`);
  const data: Promise<JSON> = await res.json()
  return {
    props: {
      meme: data
    }
  }
}

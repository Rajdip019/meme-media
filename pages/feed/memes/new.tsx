import React, { useEffect, useState } from 'react';
import NavBar from "../../components/Feed/Navbar/NavbarFeedMain"
import Head from 'next/head';
import Feed from '../../components/Feed/Main';
import { MemeRedditMain, MemeRedditChildern } from '../../../interfaces/meme-reddit';
import LeftProfileBar from '../../components/Feed/LeftProfileBar';
import RightNewsBar from '../../components/Feed/RightNewsBar/RightNewsBar';
import { template } from '../../../helpers/template'
import MemeSkeleton from '../../components/MemeSkeleton';
import { CircularProgress } from '@mui/material';
import NewTab from '../../components/Feed/Tabs/NewTab';
import Menu from '../../components/Feed/Tabs/Menu';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


const feed: React.FC = () => {

  const [page, setPage] = useState<string>('');
  const [memesArr, setMemesArr] = useState<Array<MemeRedditChildern>>([])
  const [isMemeFetched, setIsMemeFetched] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const fetchMeme = async () => {
    const { templateString } = template
    const res = await fetch(`${templateString}/meme/general/new`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        after: page
      })
    });
    const response = await res.json()
    setMemesArr((prev) => [...prev, ...response.data.children])
    setIsMemeFetched(true)
    setLoading(false);
    setPage(response.data.after)
  }

  useEffect(() => {
    fetchMeme();
  }, [])

  return (
    <div className='bg-gray-900'>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/logo Bg.png" type="image/x-icon" />
        <title>MemeMedia | New Memes</title>
      </Head>
      <NavBar />
      <div className='grid xl:grid-cols-9 xl:w-[1240px] mx-auto  '>
        <div className="col-span-2  mx-auto hidden xl:block">
          <LeftProfileBar />
        </div>
        <div className=' xl:col-span-5 mx-auto'>
        <Menu />
          {isMemeFetched ? (
            <>
          <div className='w-11/12 sm:w-[545px] mx-auto my-5'>
            <NewTab route={memesArr[0]?.data.subreddit}/>
          </div>
              {memesArr.map((memes: MemeRedditChildern) => {
                return (
                  <Feed
                    id={memes?.data?.id}
                    image={memes?.data?.url_overridden_by_dest}
                    title={memes?.data?.title}
                    post_hint={memes?.data?.post_hint}
                    author={memes?.data?.author}
                    reddit_page={memes.data?.subreddit_name_prefixed}
                    ups={memes.data?.ups}
                  />
                )
              })}
              {loading ? (
                <div className='my-5 flex justify-center w-full'>
                  <CircularProgress />
                </div>
              ) : (
                <button className='bg-blue-500 mx-auto my-5 flex font-semibold px-6 py-2 rounded-full text-white hover:bg-blue-700 transition-all' onClick={(): void => { fetchMeme(), setLoading(true) }}>Click Load More Meme...</button>
              )}
            </>
          ) : (
            <div className='col-span-5 mx-auto'>
              <MemeSkeleton />
            </div>
          )}
        </div>
        <div className='col-span-2 mx-auto sticky top-0 hidden xl:block'>
          <RightNewsBar />
        </div>
      </div>
      <button type='button' className='fixed text-white bottom-10 right-10 transition-all scale-150' onClick={() => {document.getElementById('top').scrollIntoView();}} ><ArrowCircleUpIcon className='scale-150'/></button>
    </div>
  );
};

export default feed;


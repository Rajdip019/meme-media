import React from 'react';
import { getProviders, signIn } from "next-auth/react"
import { GetServerSideProps } from 'next';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Link from 'next/link';

const login: React.FC = ({ providers }: any) => {
  return (
    <React.Fragment>
      <div className='bg-slate-900 flex items-center flex-col h-screen justify-center '>
        <div className='bg-slate-700 p-10 rounded-xl shadow-xl shadow-gray-800 flex flex-col w-96'>
        <div className='items-center cursor-pointer mx-auto flex w-full px-8 mb-5'>
              <img src="/logo Bg.png" alt="" className='w-12' />
              <span className='ml-5 font-bold lg:text-2xl text-xl font-serif text-white'>Meme Media</span>
            </div>
            <p className='text-center my-3 text-gray-300'>SignIn with  👇</p>
          <button className='bg-gray-200 w-full rounded-full font-bold py-3 my-3 text-lg hover:bg-white transition-all' onClick={(): void => { signIn(providers.google.id, { callbackUrl: "/feed" }) }}>
            <GoogleIcon className='mr-2'/> Google
          </button>
          <button className='bg-gray-200 w-full rounded-full font-bold py-3 my-3 text-lg hover:bg-white transition-all' onClick={(): void => { signIn(providers.twitter.id, { callbackUrl: "/feed" }) }}>
          <TwitterIcon className='mr-2'/> Twitter
          </button>
          <button className='bg-gray-200 w-full rounded-full font-bold py-3 my-3 text-lg hover:bg-white transition-all' onClick={(): void => { signIn(providers.github.id, { callbackUrl: "/feed" }) }}>
          <GitHubIcon className='mr-2'/> GitHub
          </button>
        </div>
        <Link href="/feed">
          <p className='text-center text-gray-200 hover:underline hover:text-white cursor-pointer mt-5'> <KeyboardArrowLeftIcon />Back to Home</p>
          </Link>
      </div>
    </React.Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: {
      providers
    }
  }
}

export default login;

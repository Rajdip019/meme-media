import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { CircularProgress } from '@mui/material'
import { template } from '../helpers/template'
import { useSession } from 'next-auth/react'
import Head from 'next/head'

export default function usercheck() {
    const { templateString } = template;

    const session = useSession<boolean>();
    const img: string = session.data?.user?.image;
    const name: string = session.data?.user?.name;
    const email: string = session.data?.user?.email;
    const id: string = session.data?.user?.id
    const router = useRouter()

    const checkUser = async () => {

        if (img && name && email && id) {
            try {
                const res = await fetch(`${templateString}/checkuser`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        id: id,
                        image: img,
                        email: email
                    }),
                })

            } catch {
                console.warn("Error: checking user failed.");
            }
        }
        router.push('/feed/memes')
    }


    useEffect(() => {
        checkUser();
    }, [session.data])

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="/logo Bg.png" type="image/x-icon" />
                <title>MemeMedia | Checking...</title>
            </Head>
            <div className='flex items-center justify-center h-screen'>
                <CircularProgress />
            </div>
        </>

    )
}


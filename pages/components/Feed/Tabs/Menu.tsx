import React, { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';


const Menu = () => {

    const router = useRouter()

    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    const handleMenu =  () => {
        if(router.pathname === "/feed/mememedia"){
            setValue(0)
        }
        if(router.pathname === "/feed/memes"){
            setValue(0+1)
        }
        if(router.pathname === "/feed/programmingmemes"){
            setValue(1+1)
        }
        if(router.pathname === "/feed/gamingmemes"){
            setValue(2+1)
        }
        if(router.pathname === "/feed/dankmemes"){
            setValue(3+1)
        }
        if(router.pathname === "/feed/CollegeMemes"){
            setValue(4+1)
        }
        if(router.pathname === "/feed/school_memes"){
            setValue(5+1)
        }
        if(router.pathname === "/feed/footballmemes"){
            setValue(6+1)
        }
        if(router.pathname === "/feed/CricketShitpost"){
            setValue(7+1)
        }
        if(router.pathname === "/feed/MemeEconomy"){
            setValue(8+1)
        }
        if(router.pathname === "/feed/indianpeoplefacebook"){
            setValue(9+1)
        }
        if(router.pathname === "/feed/memes/new"){
            setValue(0+1)
        }
        if(router.pathname === "/feed/programmingmemes/new"){
            setValue(1+1)
        }
        if(router.pathname === "/feed/gamingmemes/new"){
            setValue(2+1)
        }
        if(router.pathname === "/feed/dankmemes/new"){
            setValue(3+1)
        }
        if(router.pathname === "/feed/CollegeMemes/new"){
            setValue(4+1)
        }
        if(router.pathname === "/feed/school_memes/new"){
            setValue(5+1)
        }
        if(router.pathname === "/feed/footballmemes/new"){
            setValue(6+1)
        }
        if(router.pathname === "/feed/CricketShitpost/new"){
            setValue(7+1)
        }
        if(router.pathname === "/feed/MemeEconomy/new"){
            setValue(8+1)
        }
        if(router.pathname === "/feed/indianpeoplefacebook/new"){
            setValue(9+1)
        }
    }

    useEffect(() => {
        handleMenu()
    }, [])
    
    return (
        <div>
            <Box sx={{ bgcolor: '#003A75', color: "white" }} className="mx-auto w-[90vw]  sm:w-[545px] my-5">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    textColor="inherit"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Exclusive (M.M.)" sx={{ color: "white" }} onClick={(): void => {router.push("/feed/mememedia")}}/>
                    <Tab label="General" sx={{ color: "white" }} onClick={(): void => {router.push("/feed/memes")}}/>
                    <Tab label="Programming" sx={{ color: "white" }} onClick={(): void => {router.push("/feed/programmingmemes")}} />
                    <Tab label="Gaming" sx={{ color: "white" }} onClick={(): void => {router.push("/feed/gamingmemes")}} />
                    <Tab label="Dank" sx={{ color: "white" }} onClick={(): void => {router.push("/feed/dankmemes")}} />
                    <Tab label="College" sx={{ color: "white" }} onClick={(): void => {router.push("/feed/CollegeMemes")}} />
                    <Tab label="School" sx={{ color: "white" }} onClick={(): void => {router.push("/feed/school_memes")}} />
                    <Tab label="Football" sx={{ color: "white" }} onClick={(): void => {router.push("/feed/footballmemes")}} />
                    <Tab label="Cricket" sx={{ color: "white" }} onClick={(): void => {router.push("/feed/CricketShitpost")}} />
                    <Tab label="Economy" sx={{ color: "white" }} onClick={(): void => {router.push("/feed/MemeEconomy")}} />
                    <Tab label="Social" sx={{ color: "white" }} onClick={(): void => {router.push("/feed/indianpeoplefacebook")}} />
                </Tabs>
            </Box>
        </div>
    )
}

export default Menu
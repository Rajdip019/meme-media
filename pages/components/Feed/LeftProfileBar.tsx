import React from "react";
import { Avatar } from "@mui/material";
import { useSession } from "next-auth/react";

const LeftProfileBar: React.FC = () => {
  const session = useSession<boolean>();
  const name: string = session.data?.user.name;
  const image: string = session.data?.user.image;
  const email: string = session.data?.user.email;
  return (

      <div className="w-72 bg-[#0d0d0d] mx-auto mt-5 rounded-xl sticky top-5">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/001/225/154/small/black-low-poly-geometric-background.jpg" alt="" className="rounded-t-xl" />
        <Avatar
          alt= {name}
          src= {image}
          sx={{ width: 80, height: 80 }}
          className="mx-auto -mt-12 ring-2 ring-white"
        />
        <p className="text-center mt-3 mb-1 font-semibold text-md text-gray-50">
          {name}
        </p>
        <p className="text-sm w-10/12 mx-auto text-center text-gray-300">
          This is the Meme Platform you can find. Mark your Memes as favourite, download them, upload your own and also make memes.👇🔥
        </p>
        <hr className="my-2" />
        <div className="hover:bg-gray-700 cursor-pointer">
        <div className=" mx-auto flex justify-between items-center my-1 w-10/12 ">
          <p className="text-xs text-gray-200 font-semibold ">
            Your Memes:
          </p>
          <p className="text-sm text-blue-400 font-semibold">12</p>
        </div>

        </div>
        <hr className="" />
        <div className=" cursor-pointer hover:bg-gray-700 py-2 transition-all">
          <p className="text-xs font-light w-10/12 mx-auto text-gray-200">
            Access Meme Maker tools from here
          </p>
          <p className="text-xs font-bold w-10/12 mx-auto text-gray-200">
          🗂️ Try creating a Meme
          </p>
        </div>
        <hr className="" />
        <div className=" cursor-pointer hover:bg-gray-700 py-3 transition-all flex rounded-b-xl">
          <p className="text-xs font-bold w-10/12 mx-auto text-gray-200 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
            My Profile
          </p>
        </div>
      </div>
  );
};

export default LeftProfileBar;

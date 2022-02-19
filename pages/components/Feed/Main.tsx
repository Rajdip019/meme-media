import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { useSession } from 'next-auth/react';
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareModal from "./ShareModal"


type Props = {
  id: string,
  image: string,
  title: string,
  post_hint: string,
  author: string,
  reddit_page: string,
  ups: number
}

const Feed: React.FC<Props> = ({ id, image, title, post_hint, author, reddit_page, ups }) => {

  const session = useSession<boolean>();

  const [hasLiked, setHasLiked] = useState<boolean>(false);

  return (
    <React.Fragment>
      {post_hint === "image" && (
        <React.Fragment>
          <div className="max-w-[600px] mx-auto bg-[#0d0d0d] rounded-xl mt-5 px-4 pt-2 pb-2 border-gray-500 border-[1px] border-opacity-30 w-11/12 text-gray-100">
            <div className="flex items-center py-2">
              <Avatar
                alt={author}
                src="none"
                sx={{ width: 48, height: 48, backgroundColor: "black" }}
                className=" ring-2 ring-white"
              />
              <div>
                <p className="ml-3">{author}</p>
                <p className="ml-3 text-xs text-gray-600">
                  {reddit_page}
                </p>
              </div>
            </div>
            <>
              <h3 className="my-2">{title}</h3>
              <img src={image} alt="" className="mx-auto rounded-lg" loading="lazy" />
            </>
            <div className="flex justify-between">
              <div className="text-sm py-2 font-bold text-gray-600"> {ups} People loved❤️ it in reddit</div>
            </div>
            <hr />



            <div className="flex justify-between mt-2 sm:w-11/12 mx-auto">
              {session.status === "authenticated" && (
                <div
                  className="items-center font-semibold py-2 sm:p-2 cursor-pointer text-gray-100 hover:bg-gray-800 rounded-lg transition-all w-full flex justify-center" onClick={(): void => { setHasLiked(!hasLiked) }}
                >
                  <>
                    {hasLiked ? (
                      <>
                        <FavoriteIcon sx={{ marginRight: 1, height: 20 }} />
                        Favourite
                      </>
                    ) : (
                      <>
                        <FavoriteBorderIcon sx={{ marginRight: 1, height: 20 }} />
                        Favourite
                      </>
                    )}
                  </>
                </div>
              )}
              {session.status === "unauthenticated" && (null)}
              <ShareModal reddit_page={reddit_page} id={id}/>
              <a href={image} download target="_blank" >
              <div className="sm:flex items-center font-semibold py-2 sm:p-2 cursor-pointer text-gray-100 hover:bg-gray-800 rounded-lg transition-all w-full flex justify-center" >
                <DownloadIcon sx={{ height: 24, marginRight: 1 }} />
                Download
              </div>
              </a>
            </div>
          </div>

        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Feed;

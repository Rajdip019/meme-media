import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { useSession } from 'next-auth/react';

type Props = {
  id: string,
  image: string,
  title: string,
  post_hint: string,
  author: string
}

const Feed: React.FC<Props> = ({ id, image, title, post_hint, author }) => {
  console.log(author);

  const session = useSession<boolean>();
  const email = session.data?.user?.email;

  const [like, setLike] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);




  return (
    <React.Fragment>
      {post_hint === "image" && (
        <React.Fragment>
          <div className="max-w-[600px] mx-auto bg-[#0d0d0d] rounded-xl mt-5 px-4 pt-2 pb-2 border-gray-500 border-[1px] border-opacity-30 w-11/12 text-gray-100">
            <div className="flex items-center py-2">
              <Avatar
                alt={title}
                src="none"
                sx={{ width: 48, height: 48 }}
                className=" ring-2 ring-white"
              />
              <div>
                <p className="ml-3">{author}</p>
              </div>
            </div>
            <>
              <h3 className="my-2">{title}</h3>
              <img src={image} alt="" className="mx-auto rounded-lg" />
            </>
            <div className="flex justify-between">
              <div className="text-sm py-2 font-bold text-gray-600"> {like.length} likes</div>
              <div className="text-sm py-2 font-bold text-gray-600">
                {" "}
                {comments.length} comments
              </div>
            </div>
            <hr />



            <div className="flex justify-between mt-2 sm:w-11/12 mx-auto">
              <div
                className="flex items-center font-semibold p-2 cursor-pointer text-gray-100 hover:bg-gray-800 rounded-lg transition-all"
              >
                {hasLiked ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>{" "}
                    Liked
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>{" "}
                    Like
                  </>
                )}
              </div>
              <div className="sm:flex items-center font-semibold p-2 cursor-pointer text-gray-100 hover:bg-gray-800 rounded-lg transition-all hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>{" "}
                Share
              </div>
              <div className="flex items-center font-semibold p-2 cursor-pointer text-gray-100 hover:bg-gray-800 rounded-lg transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>{" "}
                Send
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Feed;

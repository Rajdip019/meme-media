import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Avatar } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CloseIcon from "@mui/icons-material/Close";
import ChildConfirmModal from "./ChildConfirmationModal";
import { useSession } from "next-auth/react"
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Link from "next/link";


type Props = {
    name: string;
    image: string;
    email: string;
    id: string;
};

const CreateArea: React.FC<Props> = ({ name, image, email, id }) => {

    const session = useSession();

    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setSelectedFile(null);
        setOpenChild(false);
    };

    const [openChild, setOpenChild] = useState<boolean>(false);

    const [post, setPost] = useState();
    const [posting, setPosting] = useState(false);
    const filePickerRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const addImageToPost = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        };
    };

    return (
        <div className=" w-11/12 sm:w-[545px] mx-auto my-5 bg-[#0D0D0D] rounded-xl  px-4 pt-4 pb-2 border-gray-500 border-[1px] border-opacity-30 text-gray-100">
            <div className="flex items-center w-[98%] mx-auto">
                <Avatar
                    alt={name}
                    src={image}
                    sx={{ width: 48, height: 48, backgroundColor: "black" }}
                    className=" ring-2 ring-white"
                />
                {session.status === "authenticated" ? (
                <button
                    onClick={(): void => {
                        handleOpen();
                    }}
                    className="flex sm:w-11/12 w-10/12"
                >
                    <input
                        readOnly
                        className="w-full h-12 ml-3 rounded-full border-[1px] bg-[#0D0D0D] px-5 border-gray-700 hover:bg-gray-900 transition-all cursor-pointer text-left"
                        placeholder="Create a Meme"
                    />
                </button>

                ) : (
                <button
                    className="flex sm:w-11/12 w-10/12"
                >
                    <input
                        disabled
                        className="w-full h-12 ml-3 rounded-full border-[1px] bg-[#0D0D0D] px-5 border-gray-700 hover:bg-gray-900 transition-all cursor-pointer text-left"
                        placeholder="SignIn to Create a Meme"
                    />
                </button>
                )}
            </div>
            {session.status === "authenticated" ? (
                <button
                    className="flex mt-4 items-center p-2 rounded-lg hover:bg-gray-800 cursor-pointer text-white-100 font-semibold transition-all w-full justify-center bg-slate-900"
                    onClick={(): void => {
                        handleOpen();
                    }}
                >
                    <AddPhotoAlternateIcon /> <p className="ml-2 text-lg">Photo</p>
                </button>

            ) : (
                <Link href="/auth/signin">
                    <button
                        className="flex mt-4 items-center p-2 rounded-lg hover:bg-gray-800 cursor-pointer text-white-100 font-semibold transition-all w-full justify-center bg-slate-900"
                    >
                        <LockOpenIcon /> <p className="ml-2 text-lg">SignIn</p>
                    </button>
                </Link>
            )}


            <Modal
                open={open}
                onClose={(): void => {
                    setOpenChild(true);
                }}
                aria-labelledby="Create Area"
                aria-describedby="Create a Meme"
                sx={{ overflowY: "scroll" }}
            >
                <div className="mt-28 mb-5">
                    <div className="sm:w-[500px] w-10/12 bg-[#0D0D0D] mx-auto p-4 rounded-xl text-gray-100">
                        <Box>
                            <h1 className="text-2xl pb-4 pt-2 flex justify-between">
                                Create a Post{" "}
                                <div>
                                    <ChildConfirmModal
                                        openChild={openChild}
                                        setOpenChild={setOpenChild}
                                        handleCloseMain={handleClose}
                                    />
                                </div>
                            </h1>
                            <hr className="pb-2" />
                            <div className="flex  items-center">
                                <Avatar
                                    alt={name}
                                    src={image}
                                    sx={{ width: 48, height: 48 }}
                                    className=" ring-2 ring-white"
                                />
                                <p className="ml-3 font-semibold">{name}</p>
                            </div>
                            <textarea
                                className="h-16 sm:h-32 resize-none w-full mt-5 bg-[#0D0D0D] focus:outline-none px-2 text-gray-100"
                                onChange={(e) => {
                                    setPost(null);
                                }}
                                placeholder="What do you want to talk about?"
                            ></textarea>
                            {selectedFile ? (
                                <>
                                    <CloseIcon
                                        onClick={() => {
                                            setSelectedFile(null);
                                        }}
                                        className=" cursor-pointer float-right my-1 text-3xl"
                                    />
                                    <img src={selectedFile} className="mx-auto" />
                                </>
                            ) : null}
                            <div className="flex justify-between items-center">
                                <div
                                    onClick={() => {
                                        filePickerRef.current.click();
                                    }}
                                    className="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer text-sm  font-semibold transition-all"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-10 w-10 p-2 text-blue-600"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    Photo
                                    <input
                                        ref={filePickerRef}
                                        type="file"
                                        hidden
                                        onChange={addImageToPost}
                                    />
                                </div>
                                {post ? (
                                    <button className="font-bold bg-skin-main px-4 py-2 rounded-full text-white hover:bg-blue-800 transition-all">
                                        {posting ? <>Posting</> : <>Post</>}
                                    </button>
                                ) : (
                                    <button className="font-bold bg-gray-700 px-4 py-2 rounded-full text-white transition-all">
                                        Post
                                    </button>
                                )}
                            </div>
                        </Box>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CreateArea;

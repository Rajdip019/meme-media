import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
    openChild: boolean,
    setOpenChild: React.Dispatch<React.SetStateAction<boolean>>
    handleCloseMain: () => void
};

const ChildConfirmModal: React.FC<Props> = ({ openChild, setOpenChild, handleCloseMain }) => {
  const handleOpen = () => setOpenChild(true);
  const handleClose = () => setOpenChild(false);

  return (
    <>
      <CloseIcon
        onClick={() => {
          handleOpen();
        }}
      />

      <Modal
        open={openChild}
        onClose={(): void => {
          handleClose();
        }}
        aria-labelledby="Create Area"
        aria-describedby="Create a Meme"
        sx={{ overflowY: "scroll" }}
      >
        <div className="mt-44 mb-5">
          <div className="sm:w-[500px] w-10/12 bg-gray-800 mx-auto p-4 rounded-xl text-gray-100">
            <Box>
              <h1 className="pb-4 pt-2 flex justify-between  font-semibold text-lg">
                You will lost all progress!
                <CloseIcon
                  onClick={() => {
                    handleClose();
                  }}
                  className=" cursor-pointer"
                />
              </h1>
              <div className="flex justify-end mt-5 mb-2">
                <button
                  className="font-bold bg-skin-main px-4 py-2 rounded-full text-white hover:bg-gray-900 transition-all mx-3"
                  onClick={(): void => {
                    handleClose();
                  }}
                >
                  Cancel
                </button>

                <button
                  className="font-bold bg-red-800 px-4 py-2 rounded-full text-white transition-all"
                  onClick={() => {
                    handleCloseMain();
                  }}
                >
                  Delete
                </button>
              </div>
            </Box>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ChildConfirmModal;

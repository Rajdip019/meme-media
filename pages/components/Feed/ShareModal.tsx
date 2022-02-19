import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Alert } from '@mui/material';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 545,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    backgroundColor: '#0D0D0D',
    color: 'white',
    borderRadius: "15px",
    border: '0px #0D0D0D',
};

type Props = {
    reddit_page: string,
    id: string
}

const ShareModal: React.FC<Props> = ({reddit_page, id}) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [copy, setCopy] = useState<boolean>(false)

    const shareURL = `https://www.reddit.com/${reddit_page}/comments/${id}`

    return (
        <>
            <div className=" items-center font-semibold py-2 sm:p-2 cursor-pointer text-gray-100 hover:bg-gray-800 rounded-lg transition-all w-full flex justify-center" onClick={handleOpen}>
                <ShareIcon sx={{ marginRight: 1, height: 20 }} />
                Share
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                
            >
                <Box sx={style} className="w-11/12 sm:w-[545px] mx-auto">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Share with your Friends🔥
                    </Typography>
                    <textarea className='mt-4 rounded-md w-full bg-gray-900 pl-5 pr-20 py-2 resize-none' value={shareURL} readOnly/>
                    <div className='absolute top-[83px] right-10 hover:bg-gray-800 p-2 rounded-xl'>
                    <CopyToClipboard text={shareURL} onCopy={() => setCopy(true)}>
                        <button><ContentCopyIcon /></button>
                    </CopyToClipboard>
                    </div>
                    {copy ? (<Alert severity="success" className='mt-5 transition-all'>Copied to Clipboard!</Alert>) : (null)}
                    
                </Box>
            </Modal>
        </>
    )
}

export default ShareModal
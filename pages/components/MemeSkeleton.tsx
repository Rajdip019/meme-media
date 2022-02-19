import React from 'react'
import { Skeleton } from '@mui/material'

const MemeSkeleton = () => {
  return (
    <>
    <div className='my-5'>
        <div className='flex justify-between items-center'>
        <Skeleton  variant="circular" className='w-[50px] h-[50px] my-3' animation="wave" ></Skeleton>
        <div className='w-9/12'>
        <Skeleton variant="text"  />
        <Skeleton variant="text" />
        </div>
        </div>
        <Skeleton  variant="rectangular" className='w-[300px] sm:w-[500px] h-[600px]' animation="wave" ></Skeleton>
    </div>
    <div className='my-5'>
        <div className='flex justify-between items-center'>
        <Skeleton  variant="circular" className='w-[50px] h-[50px] my-3' animation="wave" ></Skeleton>
        <div className='w-9/12'>
        <Skeleton variant="text"  />
        <Skeleton variant="text" />
        </div>
        </div>
        <Skeleton  variant="rectangular" className='w-[300px] sm:w-[500px] h-[600px]' animation="wave" ></Skeleton>
    </div>
      </>
  )
}

export default MemeSkeleton
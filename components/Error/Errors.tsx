import React from 'react'

const Error = ({ errMessage }: { errMessage?: string; }) =>
{
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <h3 className='text-red-500 text-[20px] leading-[30px] font-semibold'>
        {errMessage}
      </h3>
    </div>
  )
}

export default Error
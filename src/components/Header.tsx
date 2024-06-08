import React from 'react'
import Image from "next/image";

function Header() {
  return (
    <>
      <Image className="z-20 opacity-100 absolute logo" src='/logo.png' alt={"logo"} width={138} height={138} />
      <div className='relative flex justify-center items-center z-10 h-[172px] bg-white opacity-[67%] w-full '>
        <div className='flex flex-col gap-[15px] pl-[10px]'>
          <div className='flex gap-[16px] items-center'>
            <h1 className='title text-2xl font-medium font-montserrat'>monblanproject</h1>
            <div className='w-[135px] h-[28px] border-2 border-blue-400 rounded-sm text-[13px] text-blue-400 flex justify-center items-center'>Start on  17-02-2016</div>
          </div>
          <div className='flex justufy-between text-sm'>
            <div className='flex gap-[5px] grow'>
              <span className='font-bold'>870</span>
              <span className=''>posts</span>
            </div>
            <div className='flex gap-[5px] grow'>
              <span className='font-bold'>11,787</span>
              <span className=''>followers</span>
            </div>
            <div className='flex gap-[5px] grow'>
              <span className='font-bold'>112</span>
              <span className=''>following</span>
            </div>
          </div>
          <div className='flex gap-[16px]'>
            <h1 className='title text-2xl font-medium'>monblanproject</h1>
            <div className='border-2 border-blue-400 rounded-sm text-[13px] text-blue-400 py-[7px] px-[12px]'>Start on  17-02-2016</div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Header

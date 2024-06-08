'use client'

import React, { useState } from 'react'
import Image from "next/image";
import RowsCard from './RowsCard';
import TitlesCard from './TitlesCard';

export interface CardData {
    id: number,
    image: string,
    currentDate: {
      likes: number,
      comments: number,
    },
    otherDate: {
      likes: number,
      comments: number,
    },
    uploadDate: Date
}
interface ContentProps {
  data: CardData[]
}

function Content({ data }: ContentProps) {
  const [activeTab, setActiveTab] = useState('rows');
  return (
    <>
      <div className='py-[23px] flex justify-end px-[5px]'>
        <Image src="titlesGroup.svg"
          alt="titles group"
          width={22}
          height={22}
          className={`mr-6 cursor-pointer ${activeTab === 'titles' ? 'filter grayscale opacity-50' : 'opacity-100'}`}
          onClick={() => setActiveTab('titles')}
        />
        <Image src="rowsGroup.svg"
          alt="rows group"
          width={22}
          height={22}
          className={`cursor-pointer ${activeTab === 'rows' ? 'filter grayscale opacity-50' : 'opacity-100'}`}
          onClick={() => setActiveTab('rows')}
        />
      </div>

      {activeTab === 'rows' ? (
          <div className="mb-[30px]">
            <div className="flex flex-col gap-[8px]">
              {data.map(item => <RowsCard key={item.id} item={item} />)}
            </div>
          </div>
        ) : (
          <div className="mb-[30px]">
            <div className="grid grid-cols-4 gap-[8px]">
              {data.map(item => <TitlesCard key={item.id} item={item} />)}
            </div>
          </div>
      )}
      <div className='flex justify-center'>
        <button className='px-[27px] py-[8px] border-2 border-gray-400 rounded-[20px] text-gray-400 font-medium'>LOAD MORE</button>
      </div>


    </>
  )
}

export default Content

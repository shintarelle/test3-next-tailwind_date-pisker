
import React from 'react'
import Image from "next/image";
import { CardData } from './Content';

interface CardProps {
  item: CardData;
}

function RowsCard({ item }: CardProps) {

  const day = item.uploadDate.getDate().toString().padStart(2, '0');
  const month = (item.uploadDate.getMonth() + 1).toString().padStart(2, '0');
  const year = item.uploadDate.getFullYear().toString();

  const formattedDate = `${day}-${month}-${year}`;

  return (
    <div className="bg-white flex">
      <Image className="" src={`${item.image}`} alt={"image"} width={86} height={86} />
      <div className='flex gap-4 font-medium grow pl-[30px]'>
        <div className='flex flex-col justify-center gap-[5px] grow'>
          <p className='bold text-base'>Today</p>
          <div className='flex gap-[18px]'>
            <div className='flex gap-[6px]'>
              <Image className="" src='/heart.svg' alt={"heart"} width={18} height={18} />
              <span className='bold'>{item.currentDate.likes}</span>
            </div>
            <div className='flex gap-[6px]'>
              <Image className="" src='/comment.svg' alt={"comment"} width={18} height={18} />
              <span className='bold'>{item.currentDate.comments}</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center gap-[5px] grow'>
          <p className='bold text-base'>9-08-2016</p>
          <div className='flex gap-[18px]'>
            <div className='flex gap-[6px]'>
              <Image className="" src='/heart.svg' alt={"heart"} width={18} height={18} />
              <span className='bold'>{item.otherDate.likes}</span>
            </div>
            <div className='flex gap-[6px]'>
              <Image className="" src='/comment.svg' alt={"comment"} width={18} height={18} />
              <span className='bold'>{item.otherDate.comments}</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center gap-[5px] grow'>
          <p className='bold text-base'>Image upload</p>
          <p className='bold'>{formattedDate}</p>
        </div>
      </div>
    </div>
  )
}

export default RowsCard

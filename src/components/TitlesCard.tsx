
import React from 'react'
import Image from "next/image";
import { CardData } from './Content';

interface CardProps {
  item: CardData;
}

function TitlesCard({ item }: CardProps) {

  const day = item.uploadDate.getDate().toString().padStart(2, '0');
  const month = (item.uploadDate.getMonth() + 1).toString().padStart(2, '0');
  const year = item.uploadDate.getFullYear().toString();

  const formattedDate = `${day}-${month}-${year}`;

  return (
    <div className="bg-white flex flex-col">
      <Image className="" src={`${item.image}`} alt={"image"} width={203} height={203} />
      <div className=' font-medium p-[12px]'>
        <div className=' flex mb-[25px] justify-between'>

        <div className='flex flex-col justify-center gap-[7px] grow'>
          <p className='bold text-base'>Today</p>
          <div className='flex flex-col gap-[6px]'>
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

        <div className='flex flex-col justify-center gap-[7px]'>
          <p className='bold text-base'>9-08-2016</p>
          <div className='flex flex-col gap-[6px]'>
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
        </div>

        <div className='flex justify-between gap-[5px] mb-[6px]'>
          <p className='bold text-sm self-center'>Image upload</p>
          <p className='bold text-xs self-center'>{formattedDate}</p>
        </div>
      </div>
    </div>
  )
}

export default TitlesCard

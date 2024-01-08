'use client';

import React from 'react';
import Image from 'next/image';
import Wrapper from '../shared/ComponentWrapper/ComponentWrapper';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

interface Props {
  img: string;
  title: string;
  des: string[];
  secIndex: number;
}

const SectionCard = ({ img, title, des, secIndex }: Props) => {
  const isEvenSection = secIndex % 2 === 0;
  const bgColor = !isEvenSection ? 'bg-white-main' : 'bg-black/10';

  return (
    <div className={`w-full py-8 md:py-16 ${bgColor}`}>
      <Wrapper>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10'>
          <Zoom
            duration={2000}
            triggerOnce
            className={`
           ${isEvenSection ? 'order-2' : 'order-1'}
          `}
          >
            <div className={`w-full h-[260px] sm:h-[400px] md:h-[450px] `}>
              <Image
                src={img}
                className='object-cover rounded-lg'
                fill
                alt=''
              />
            </div>
          </Zoom>
          <div
            className={`w-full flex flex-col justify-center items-start gap-3 sm:gap-6 ${
              isEvenSection ? 'order-1' : 'order-2Pse'
            }`}
          >
            <Slide duration={1500} triggerOnce direction='right'>
              <p className='text-black text-[30px] sm:text-[40px] tracking-wider leading-[37px] sm:leading-[40px] font-semibold'>
                {title}
              </p>
            </Slide>

            <Fade duration={1500} triggerOnce cascade>
              <div className='w-full flex flex-col gap-3'>
                {des?.map((item, index) => (
                  <p
                    key={index}
                    className='text-[16px] sm:text-[18px] text-black font-normal'
                  >
                    {item}
                  </p>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SectionCard;

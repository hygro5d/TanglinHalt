'use client';

import React from 'react';
import Wrapper from '../shared/ComponentWrapper/ComponentWrapper';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import Image from 'next/image';

interface Props {
  video: string;
  title: string;
  des: string;
  index: number;
}

const VideoSection = ({ video, title, des, index }: Props) => {
  const isEvenSection = index % 2 === 0;

  return (
    <div className='w-full bg-red-main'>
      <Wrapper style='w-full'>
        <Fade className='w-full' duration={1500} delay={500} triggerOnce>
          <div className='w-full grid grid-cols-1 md:grid-cols-[1.5fr,1fr] lg:grid-cols-[1fr,1fr] justify-center items-center gap-3 lg:gap-8 h-full lg:max-w-none duration-300 py-6 md:py-4 lg:py-12 rounded-md'>
            <Zoom
              duration={1000}
              triggerOnce
              className={`${isEvenSection ? 'order-2' : 'order-1'}`}
            >
              <div className='w-full h-[200px] sm:h-[300px] md:h-[280px] lg:h-[330px]'>
                <iframe
                  width='100%'
                  height='100%'
                  className='rounded-md hover:scale-105 duration-500 object-fill'
                  src={video}
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                ></iframe>
              </div>
            </Zoom>
            <Slide
              direction={isEvenSection ? 'left' : 'right'}
              duration={1500}
              triggerOnce
              className={`${isEvenSection ? 'order-1' : 'order-2'}`}
            >
              <div className='flex flex-col gap-1 items-start'>
                <p className='text-[18px] sm:text-[24px] text-white-main font-medium md:font-semibold'>
                  {title}
                </p>
                <p className='text-[14px] sm:text-[16px] text-white-main text-left font-normal'>
                  {des}
                </p>
              </div>
            </Slide>
          </div>
        </Fade>
      </Wrapper>
    </div>
  );
};

export default VideoSection;

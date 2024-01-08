'use client';

import Link from 'next/link';
import React from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const ContactUs = () => {
  return (
    <div className='w-full py-12 sm:py-28 bg-[url(/assets/contactUs.webp)] bg-cover flex flex-col justify-center items-center bg-no-repeat relative bg-center'>
      <div className='absolute inset-0 bg-black bg-opacity-30'></div>
      <Fade duration={1000} triggerOnce>
        <div className='flex flex-col gap-1 sm:gap-5 relative w-full justify-center items-center px-8'>
          <Slide direction='down' duration={1000} triggerOnce>
            <h1 className='text-[35px] text-center leading-[40px] sm:text-[50px] text-white-main font-bold tracking-wider opacity-80'>
              Connect With Us
            </h1>
          </Slide>
          <Slide direction='up' duration={1000} delay={500} triggerOnce>
            <p className='text-[16px] sm:text-[22px] leading-[23px] tracking-wide text-center text-white-main font-normal opacity-80'>
              We are always on the lookout for like-minded partners to
              collaborate with, so go on and get in touch with us!
            </p>
          </Slide>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-0 sm:gap-2 md:gap-3'>
            <Zoom
              duration={1000}
              delay={1000}
              triggerOnce
              className='mt-4 md:mt-0'
            >
              <Link
                href='https://honour.sg/initiatives/'
                target='blank'
                className='px-6 h-[40px] sm:h-[50px] flex justify-center items-center rounded-[60px] tracking-wider hover:opacity-80 active:translate-y-[2px] text-white-main/80 bg-red-main font-medium text-[16px] sm:text-[18px]'
              >
                Learn More
              </Link>
            </Zoom>
            <Zoom
              duration={1000}
              delay={1200}
              triggerOnce
              className='mt-4 md:mt-0'
            >
              <Link
                href='https://honour.sg/contact/'
                target='blank'
                className='px-6 h-[40px] text-center sm:h-[50px] mt-0 md:mt-1 flex justify-center items-center rounded-[60px] tracking-wider hover:opacity-80 active:translate-y-[2px] text-white-main/80 bg-red-main font-medium text-[16px] sm:text-[18px]'
              >
                The Honour Film Initiative
              </Link>
            </Zoom>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ContactUs;

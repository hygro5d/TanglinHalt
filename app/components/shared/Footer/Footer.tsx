'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';
import Wrapper from '../ComponentWrapper/ComponentWrapper';
import { FaFacebook } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full py-8 sm:py-12 bg-black'>
      <Wrapper style=' h-full'>
        <div className='w-full flex justify-between items-start'>
          <Fade duration={1000} triggerOnce className='w-full'>
            <div className='w-full h-full flex gap-[5px] sm:gap-[7px] flex-col'>
              {footerData.map((item, index) => (
                <Slide
                  direction='up'
                  duration={1000}
                  delay={index * 100}
                  triggerOnce
                  key={index}
                >
                  {index + 1 === footerData.length ? (
                    <a
                      href={`mailto:${item}`}
                      target='_blank'
                      rel='noreferrer'
                      className='text-[14px] sm:text-[17px] text-white-main font-semibold'
                    >
                      Email: <span className='opacity-80'>{item}</span>
                    </a>
                  ) : (
                    <p className='text-[14px] sm:text-[17px] text-white-main font-semibold'>
                      {item}
                    </p>
                  )}
                </Slide>
              ))}
            </div>
          </Fade>
          {/* social icons ======>  */}
          <div className='flex justify-center items-center gap-5'>
            {socialIcons.map((item, index) => {
              return (
                <Link
                  key={index}
                  className='hover:opacity-80'
                  href={item.path}
                  target='blank'
                >
                  {item.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;

const footerData = [
  'Honour (Singapore) Limited',
  '6 Shenton Way, OUE Downtown 2, #24-11',
  'Singapore 068809',
  'Telephone: +65 6438 8175',
  'admin@honour.sg',
];

const socialIcons = [
  {
    icon: (
      <FaFacebook className='text-[30px] text-white-main hover:text-red-main duration-200' />
    ),
    path: ' https://www.facebook.com/HonourOurSingapore',
  },
  {
    icon: (
      <FaYoutube className='text-[34px] text-white-main hover:text-red-main duration-200' />
    ),
    path: 'https://www.youtube.com/@honoursingapore',
  },
  {
    icon: (
      <PiInstagramLogoFill className='text-[32px] text-white-main hover:text-red-main duration-200' />
    ),
    path: 'https://www.instagram.com/HonourSingapore/',
  },
];

{
  /* <div className='w-full min-h-[120px] sm:min-h-[120px] md:h-[150px] lg:min-h-[180px] sm:pt-0 pt-4 bg-[#efece8] flex sm:flex-row flex-col gap-0 sm:gap-8 justify-center items-center '>
{logos.map((item, index) => {
  return (
    <Link
      key={index}
      target='/blank'
      href={item.link}
      className={` hover:opacity-80 ${
        index === 1
          ? 'w-[120px] sm:w-[150px] md:w-[240px] h-[70px] sm:h-[100px] md:h-[130px]'
          : 'w-[50px] sm:w-[50px] md:w-[70px] h-[50px] md:h-[80px]'
      }  relative`}
    >
      <Image src={item.src} fill alt='' className='object-fill' />
    </Link>
  );
})}
</div> */
}

// const logos = [
//   {
//     link: 'https://honour.sg/',
//     src: '/assets/logo.png',
//   },
//   {
//     link: 'https://www.nhb.gov.sg/',
//     src: '/assets/logo2.png',
//   },
// ];

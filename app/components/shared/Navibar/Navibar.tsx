import React from 'react';
import Image from 'next/image';
import Wrapper from '../ComponentWrapper/ComponentWrapper';
import Link from 'next/link';

const Navibar = () => {
  return (
    <Wrapper style='h-[80px] w-full bg-red-main/10'>
      <div className='w-full h-full flex justify-start items-center'>
        {/* logos =========>  */}
        {logos.map((item, index) => {
          return (
            <div
              key={index}
              className={` ${
                index === 1 ? 'w-[180px] h-[75px] -ml-4' : 'w-[100px] h-[50px]'
              }  relative`}
            >
              <Image src={item.img} alt='' fill className='object-contain' />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Navibar;

const logos = [
  {
    img: '/assets/logo.png',
    path: '#',
  },
  {
    img: '/assets/logo2.png',
    path: '#',
  },
];

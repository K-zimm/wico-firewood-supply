import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const productCard = (props) => {
  return (
    <div
      className={
        'productCard col-span-8 md:col-span-4 2xl:col-span-3 border border-gray mb-4 px-4 pb-4 text-xl text-gray-light tracking-widest text-center uppercase' +
        props.class
      }
    >
      <div className='relative productCard__banner mb-2'>
        <StaticImage
          src='../images/title-banner.png'
          width={250}
          placeholder='traced_svg'
          alt=''
        />
        <div className='flex justify-center items-center absolute inset-0'>
          <h4 className='leading-none'>{props.title}</h4>
        </div>
      </div>
      <div className='mb-2 pb-2 border-b border-gray-light w-4/5'>
        ${props.price}
      </div>
      <div>Stacking + ${props.stacking}</div>
    </div>
  );
};

export default productCard;

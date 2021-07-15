import React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';

const SpecialsCard = (props) => {
  return (
    <div className='my-4 md:mx-4 px-1 max-w-sm w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
      <div className='overflow-hidden rounded-lg shadow-lg'>
        <GatsbyImage image={props.image} className='max-h-40' alt={props.alt} />
        <header className='leading-tight p-2 md:p-4'>
          <h1 className='text-lg mb-2 font-semibold'>{props.title}</h1>
          <div
            className='text-grey-darker text-sm'
            dangerouslySetInnerHTML={{
              __html: props.description,
            }}
          ></div>
        </header>
      </div>
    </div>
  );
};

export default SpecialsCard;

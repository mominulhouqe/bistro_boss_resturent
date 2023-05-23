import React from 'react';

const SectionTitile = ({heading, subHeading}) => {
    return (
        <div className='mx-auto md:w-4/12 text-center my-8'>
            <p className='text-yellow-600 mb-2'>--- {subHeading} ---</p>
            <p className='text-2xl uppercase border-y-4 py-4'>{heading}</p>
            
        </div>
    );
};

export default SectionTitile;
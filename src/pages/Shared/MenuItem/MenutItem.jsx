import React from 'react';

const MenutItem = ({ item }) => {
    const { name, image, price, recipe } = item
    return (
        <div className='flex space-x-4 my-6'>
            <img className='w-[96px]' style={{ borderRadius: '0 200px  200px 200px' }} src={image} alt="" />
            <div className=''>
                <h3 className='uppercase font-semibold mb-2'>{name}--------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>{price}</p>

        </div>
    );
};

export default MenutItem;
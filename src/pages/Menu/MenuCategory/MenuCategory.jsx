import React from 'react';

const MenuCategory = ({item}) => {
    const { name, image, price, recipe } = item
    return (
        <div>

            <div className='flex space-x-4 mb-2'>
                <img className='w-[96px]' style={{ borderRadius: '0 200px  200px 200px' }} src={image} alt="" />
                <div className=''>
                    <h3 className='uppercase font-semibold mb-2'>{name}--------</h3>
                    <p>{recipe}</p>
                </div>
                <p className='text-yellow-500'>{price}</p>
            </div>
            
        </div>
    );
};

export default MenuCategory;
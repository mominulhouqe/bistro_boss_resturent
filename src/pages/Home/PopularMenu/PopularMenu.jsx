import React, { useEffect, useState } from 'react';


import MenutItem from '../../Shared/MenuItem/MenutItem';
import SectionTitile from '../../Shared/SectionTitile/SectionTitile';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
 const [menu] = useMenu();
const popular = menu.filter(item => item.category === 'popular');

 

    return (
        <div className='mb-12 p-4 font-mono'>
            <SectionTitile subHeading={"Check it Out"} heading={"From our menu"} />
            <div className='grid md:grid-cols-2 mb-4 gap-10 '>
                {popular.map(item => (
                    <MenutItem key={item._id} item={item} />
                ))}
            </div>
            <div className='mx-auto w-1/2 md:w-2/12 text-center my-8'>
                <p className='uppercase font-semibold'>view Full menu</p>
                <div class="border-b-4 border-black rounded-b-lg"></div>
            </div>
        </div>
    );
};

export default PopularMenu;

import React, { useEffect, useState } from 'react';


import MenutItem from '../../Shared/MenuItem/MenutItem';
import SectionTitile from '../../Shared/SectionTitile/SectionTitile';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems);
            });
    }, []);

    return (
        <div className='mb-12 font-mono'>
            <SectionTitile subHeading={"Check it Out"} heading={"From our menu"} />
            <div className='grid md:grid-cols-2 mb-4 gap-10 '>
                {menu.map(item => (
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

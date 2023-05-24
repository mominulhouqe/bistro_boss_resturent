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
        <div className='mb-12'>
            <SectionTitile subHeading={"Check it Out"} heading={"From our menu"} />
            <div className='grid md:grid-cols-2 mb-4 gap-10 '>
                {menu.map(item => (
                    <MenutItem key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default PopularMenu;

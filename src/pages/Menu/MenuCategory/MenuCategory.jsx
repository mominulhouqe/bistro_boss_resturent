import React from 'react';
import MenutItem from '../../Shared/MenuItem/MenutItem';
import Cover from '../../Shared/Cover/Cover';
import img1 from '../../../assets/menu/banner3.jpg'
import {Link} from 'react-router-dom'

const MenuCategory = ({ items, img, title }) => {
    
    return (
        <div className='pt-8'>

            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 mb-4 gap-10 mb-'>
                {items.map(item => (
                    <MenutItem key={item._id} item={item} />
                ))}
            </div>
            <Link className='flex justify-center items-center my-4' to={`/shop/${title}`}>
                <button className='btn  btn-outline border-0 border-b-4 mt-4'>Order Now</button>
            </Link>

          


        </div>
    );
};

export default MenuCategory;
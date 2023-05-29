import React from 'react';
import MenutItem from '../../Shared/MenuItem/MenutItem';
import Cover from '../../Shared/Cover/Cover';
import img1 from '../../../assets/menu/banner3.jpg'
import {Link} from 'react-router-dom'

const MenuCategory = ({ items, img, title }) => {
    // const { name, image, price, recipe } = item
    return (
        <div>

            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 mb-4 gap-10 mb-'>
                {items.map(item => (
                    <MenutItem key={item._id} item={item} />
                ))}
            </div>
            <Link className='flex justify-center items-center my-4' to={`/order/${title}`}>
                <button className='btn  btn-outline border-0 border-b-4 mt-4'>Order Now</button>
            </Link>

            {/* 

            <div className='flex space-x-4 mb-2'>
                <img className='w-[96px]' style={{ borderRadius: '0 200px  200px 200px' }} src={image} alt="" />
                <div className=''>
                    <h3 className='uppercase font-semibold mb-2'>{name}--------</h3>
                    <p>{recipe}</p>
                </div>
                <p className='text-yellow-500'>{price}</p>
            </div> */}


        </div>
    );
};

export default MenuCategory;
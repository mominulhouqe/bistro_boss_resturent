import React from 'react';
import img1 from '../../../assets/home/featured.jpg'
import SectionTitile from '../../Shared/SectionTitile/SectionTitile';
const OurMenu = () => {
    return (
        <div className='mt-8 my-20 bg-fixed' style={{ backgroundImage: `url(${img1})` }}>
            <SectionTitile subHeading={"Check it out"} heading={"From Our Menu"} />


            <div  className='md:flex bg-slate-600 opacity-70 text-white justify-center items-center py-20 px-36'>
                <div>
                    <img className='rounded-2xl' src={img1} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae voluptatibus minus facilis odit, illo, voluptate sunt, aliquam eos aliquid officia vel alias. Nisi, voluptates adipisci?</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-2'>Order Now</button>
                </div>
            </div>
 
        </div>
    );
};

export default OurMenu;
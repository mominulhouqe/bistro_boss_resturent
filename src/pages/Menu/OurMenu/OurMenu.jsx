import React from 'react';
import { Helmet } from 'react-helmet-async';
import img1 from '../../../assets/menu/banner3.jpg'
import img2 from '../../../assets/menu/pizza-bg.jpg'
import img3 from '../../../assets/menu/salad-bg.jpg'
import img4 from '../../../assets/menu/dessert-bg.jpeg'
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitile from '../../Shared/SectionTitile/SectionTitile';
import FavoriteFood from '../../Shared/FavoriteFood/FavoriteFood';


const OurMenu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')


    return (
        <div className='container mx-auto'>
            <Helmet><title>Our Menu || Bristu Boss</title></Helmet>

            <Cover img={img1} title={"Our Menu"} description={"This menu Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."} ></Cover>
            <div className='mb-12 p-4 font-mono'>
                <SectionTitile subHeading={"Don't Miss"} heading={"Today's Offer"} />
                {/* offered menu items */}
                <div className='grid md:grid-cols-2 mb-12 gap-10  '>
                    {offered.map(item => (
                        <MenuCategory key={item._id} item={item} />
                    ))}
                </div>
                {/* dessert card */}

                <div className='mx-auto w-1/2 md:w-3/12 text-center my-8'>
                   <p className='uppercase font-semibold'>ORDER YOUR FAVOURITE FOOD</p>
                    <div className="border-b-4 border-black rounded-b-lg"></div>
                </div>

                {/* cover img */}

                <FavoriteFood img={img4} title={"Desserts"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium velit vitae doloribus"} button={"order now"}></FavoriteFood>


                {/* dessert menu items */}

                {
                    <div className='grid md:grid-cols-2 my-12 mb-4 gap-10 '>
                        {dessert.map(item => (
                            <MenuCategory key={item._id} item={item} />
                        ))}
                    </div>
                }
                {/*  */}
                <div className='mx-auto w-1/2 md:w-3/12 text-center my-8'>
                   <p className='uppercase font-semibold'>ORDER YOUR FAVOURITE FOOD</p>
                    <div className="border-b-4 border-black rounded-b-lg"></div>
                </div>

                {/* cover img 2 */}

                <FavoriteFood img={img3} title={"Soup"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium velit vitae doloribus"} button={"order now"}></FavoriteFood>


                {/* soup menu items */}

                {
                    <div className='grid md:grid-cols-2 my-12 mb-4 gap-10 '>
                        {soup.map(item => (
                            <MenuCategory key={item._id} item={item} />
                        ))}
                    </div>

                }
                <div className='mx-auto w-1/2 md:w-3/12 text-center my-8'>
                  <p className='uppercase font-semibold'>ORDER YOUR FAVOURITE FOOD</p>
                    <div className="border-b-4 border-black rounded-b-lg"></div>
                </div>
                {/* cover img 3 */}

                <FavoriteFood img={img2} title={"pizza"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium velit vitae doloribus"} button={"order now"}></FavoriteFood>


                {/* Pizza menu items */}

                {
                    <div className='grid md:grid-cols-2 my-6 mb-4 gap-10 '>
                        {pizza.map(item => (
                            <MenuCategory key={item._id} item={item} />
                        ))}
                    </div>
                }


                <div className='mx-auto w-1/2 md:w-3/12 text-center my-8'>
                    <p className='uppercase font-semibold'>ORDER YOUR FAVOURITE FOOD</p>
                    <div className="border-b-4 border-black rounded-b-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;
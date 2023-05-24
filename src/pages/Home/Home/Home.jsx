import React from 'react';

import Banner from '../Carousel/Banner';
import Category from '../Categorys/Category';
import Features from '../Features/Features';
import PopularMenu from '../PopularMenu/PopularMenu';
import ContactUs from '../ContactUs/ContactUs';
import ChefRecomended from '../ChefRecomended/ChefRecomended';
import OurMenu from '../OurMenu/OurMenu';

const Home = () => {
    return (
        <div>

            <Banner />
            <Category />
            <Features />
            <PopularMenu />
            <ContactUs />
            <ChefRecomended />
            <OurMenu />
        </div>
    );
};

export default Home;
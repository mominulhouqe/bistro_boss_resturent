import React from 'react';

import Banner from '../Carousel/Banner';
import Category from '../Categorys/Category';
import Features from '../Features/Features';
import PopularMenu from '../PopularMenu/PopularMenu';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>

            <Banner />
            <Category />
            <Features />
            <PopularMenu />
            <ContactUs />
        </div>
    );
};

export default Home;
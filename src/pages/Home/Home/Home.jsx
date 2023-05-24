import React from 'react';

import Banner from '../Carousel/Banner';
import Category from '../Categorys/Category';
import Features from '../Features/Features';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>

            <Banner />
            <Category />
            <Features />
            <PopularMenu />
        </div>
    );
};

export default Home;
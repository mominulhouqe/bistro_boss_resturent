import React from 'react';
import Banner from '../Carousel/Banner';
import Category from '../Categorys/Category';
import Features from '../Features/Features';
import PopularMenu from '../PopularMenu/PopularMenu';
import ContactUs from '../ContactUs/ContactUs';
import ChefRecomended from '../ChefRecomended/ChefRecomended';
import OurMenu from '../OurMenu/OurMenu';
import Testimonials from '../Testimoials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || Bristro Boss</title>
            </Helmet>
            <Banner />
            <Category />
            <Features />
            <PopularMenu />
            <ContactUs />
            <ChefRecomended />
            <OurMenu />
            <Testimonials />
        </div>
    );
};

export default Home;
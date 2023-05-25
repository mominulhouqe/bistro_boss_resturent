import React from 'react';
import { Helmet } from 'react-helmet-async';
import img1 from '../../../assets/menu/banner3.jpg'
import Cover from '../../Shared/Cover/Cover';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';


const OurMenu = () => {
    return (
        <div>
            <Helmet><title>Our Menu || Bristu Boss</title></Helmet>

            <Cover img={img1} title={"Our Menu"} description={"This menu Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."} ></Cover>

            <PopularMenu></PopularMenu>
          
        </div>
    );
};

export default OurMenu;
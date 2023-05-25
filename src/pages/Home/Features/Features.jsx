import React from 'react';
import img1 from '../../../assets/home/featured.jpg'
// import SectionTitile from '../../Shared/SectionTitile/SectionTitile';
import FavoriteFood from '../../Shared/FavoriteFood/FavoriteFood';

const Features = () => {
    return (

        <FavoriteFood img={img1} title={"DESSERTS" } description={"This is Features for our menu Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."  } button={"order"}></FavoriteFood>
    );
};

export default Features;
import React from 'react';
import FavoriteFood from '../../Shared/FavoriteFood/FavoriteFood';
import img1 from '../../../assets/menu/dessert-bg.jpeg'

const MenuFavorite = () => {
    return (
        <div>
            <FavoriteFood img={img1} title={"MessErts"} description={"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."} button={"order Now"}></FavoriteFood>
        </div>
    );
};

export default MenuFavorite;
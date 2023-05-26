import React from 'react';


const MenuCard = ({item}) => {

    const { name, image, price, recipe } = item
    return (
        <div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src={image} className='h-96' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
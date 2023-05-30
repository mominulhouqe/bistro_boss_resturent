import React from 'react';


const MenuCard = ({ item }) => {

    const { name, image, price, recipe } = item

    const handleToCart = (item) => {
        console.log(item);
    }

    return (
        <div>
            <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src={image} className='h-96' alt="Shoes" /></figure>
                <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center my-4">
                        <button onClick={() =>handleToCart(item)} className="btn btn-primary">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
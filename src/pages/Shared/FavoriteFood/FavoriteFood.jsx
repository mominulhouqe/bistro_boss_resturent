import React from 'react';
import { Parallax } from 'react-parallax';

const FavoriteFood = ({ title, img, description, button }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="hero h-[600px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content bg-slate-800 bg-opacity-50 text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5">{description}</p>
                            <button className="btn btn-primary">{button}</button>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default FavoriteFood;
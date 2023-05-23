import React from 'react';
import img1 from '../../../assets/home/featured.jpg'
import SectionTitile from '../../Shared/SectionTitile/SectionTitile';

const Features = () => {
    return (
        <div>
            <SectionTitile 
            subHeading={"Check it out"}
            heading={"FROM OUR MENU"}
            >

            </SectionTitile>
            <div className="hero min-h-screen mb-10" style={{ backgroundImage: `url(${img1})` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content opacity-95 bg-slate-50 rounded text-center ">
                    <div className="max-w-md  ">
                        <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">order now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
import React from 'react';
import img1 from '../../../assets/home/featured.jpg'
import SectionTitile from '../../Shared/SectionTitile/SectionTitile';
const OurMenu = () => {
    return (
        <div>

            <SectionTitile subHeading={"Check it out"} heading={"From Our Menu"} />


            <div className="hero min-h-screen -mt-12" style={{ backgroundImage: `url(${img1})` }}>                <div className="hero-overlay bg-opacity-60"></div>

                <div className="hero-content text-center text-neutral-content">

                    <div className="max-w flex gap-5 justify-center items-center">
                        <img className='w-1/2 rounded-xl' src={img1} alt="" />
                        <div>
                            <h1 className="mb-5 font-semibold">March 20, 2023</h1>
                            <h1 className="mb-5 font-semibold">WHERE CAN I GET SOME?</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">read more</button>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurMenu;
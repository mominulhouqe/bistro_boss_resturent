import React from 'react';
import SectionTitile from '../../Shared/SectionTitile/SectionTitile';
import img1 from '../../../assets/menu/soup-bg.jpg'
import img2 from '../../../assets/menu/dessert-bg.jpeg'
import img3 from '../../../assets/menu/pizza-bg.jpg'


const ChefRecomended = () => {
    return (
        <div>
            <SectionTitile subHeading={"Should Try"} heading={"chef Recomends"} />
            <div className='grid lg:grid-cols-3 md:grid-cols-2  justify-center'>
                {/* card 1 */}
                <div className="card w-96 bg-base-100 mb-4 shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body text-center ">
                        <h2 className="card-title">Soup </h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn border-none btn-outline text-orange-800 bg-base-200 ">add to cart</button>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card w-96 bg-base-100 mb-4 shadow-xl">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title">Cake</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn border-none btn-outline text-orange-800 bg-base-200 ">add to cart</button>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card w-96 bg-base-100 mb-4 shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body ">
                        <h2 className="card-title">Pizza</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn border-none btn-outline  text-orange-800 bg-base-200 ">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefRecomended;
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import SectionTitile from "../../Shared/SectionTitile/SectionTitile";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [swips, setSwips] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setSwips(data))
    }, [])


    return (
        <div>

            <SectionTitile subHeading={"What Our Clients Say"} heading={"Testimonials"}>

            </SectionTitile>
            <Swiper

                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    swips.map(swip => <SwiperSlide key={swip._id}>

                        <div className="w-3/3 mx-auto">
                            <Rating className="mx-auto my-8"
                                style={{ maxWidth: 180 }}
                                value={swip.rating}
                                
                            />
                            <div className=" text-center flex justify-center items-center text-4xl">
                            <p > <FaQuoteLeft /> </p>
                     
                            </div>
                            <p className="text-center mx-16 my-8"> {swip.details}</p>

                            <p className="text-center text-orange-500 text-2xl my-5">  {swip.name}</p>
                        </div>


                    </SwiperSlide>)
                }



            </Swiper>

        </div>
    );
};

export default Testimonials;
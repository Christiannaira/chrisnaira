import FastForward from '../assets/fast-forward.gif';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';

function Review() {
    return (
        <>
            <section className="reviews" id="reviews">
                <div className="reviews-content container">

                    <div className="reviews-main ">
                        <span>my colleagues</span>
                        <h2 className='d-flex align-items-center'>TESTIMONIALS <img src={FastForward} alt="" width={'100px'} className='rounded-pill ms-3' /> </h2>
                    </div>

                    <div className="colleagues">

                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>

                                <div className="reviewOne colleagues_review">

                                    <div className="profile">

                                    </div>

                                    <div className="profile-text">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, consequatur! Dolorem commodi id natus sit nesciunt tenetur, dolores ullam cumque, fugiat temporibus, debitis nemo. Dicta deleniti nisi molestiae soluta unde!</p>
                                    </div>

                                </div>

                            </SwiperSlide>


                            <SwiperSlide>


                            </SwiperSlide>


                            <SwiperSlide>


                            </SwiperSlide>

                        </Swiper>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Review;
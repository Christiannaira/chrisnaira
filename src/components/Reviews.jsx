import FastForward from '../assets/fast-forward.gif';

import ReviewOne from '../assets/c1.jpg';

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

                                    <div className="profile d-flex align-items-center">

                                        <div className="profile-img">
                                            <img src={ReviewOne} alt="" width={'100%'} height={'85%'} />
                                        </div>

                                        <div className="profile-info">
                                            <h2>Bryan Barnedo<i class='bx bxs-check-circle'></i><br />
                                                <span>Freelancer | Web Designer</span>
                                            </h2>
                                            <a href="#" target="_blank"><i class='bx bxl-facebook-square' ></i></a>
                                        </div>

                                    </div>

                                    <div className="profile-text">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ut repellat distinctio assumenda provident inventore sunt eligendi. Doloribus aut expedita quibusdam, fugiat, aperiam magni iure, pariatur magnam voluptatibus fugit eveniet?</p>
                                    </div>

                                </div>

                            </SwiperSlide>


                            <SwiperSlide>

                                <div className="reviewTwo colleagues_review">

                                    <div className="profile d-flex align-items-center">

                                        <div className="profile-img">
                                            <img src={ReviewOne} alt="" width={'100%'} height={'85%'} />
                                        </div>

                                        <div className="profile-info">
                                            <h2>Reyson Carpio<i class='bx bxs-check-circle'></i><br />
                                                <span>Web Developer</span>
                                            </h2>
                                        </div>

                                    </div>

                                    <div className="profile-text">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ut repellat distinctio assumenda provident inventore sunt eligendi. Doloribus aut expedita quibusdam, fugiat, aperiam magni iure, pariatur magnam voluptatibus fugit eveniet?</p>
                                    </div>

                                </div>

                            </SwiperSlide>

                            <SwiperSlide>

                                <div className="reviewOne colleagues_review">

                                    <div className="profile d-flex align-items-center">

                                        <div className="profile-img">
                                            <img src={ReviewOne} alt="" width={'100%'} height={'85%'} />
                                        </div>

                                        <div className="profile-info">
                                            <h2>John Carl Torcuator<i class='bx bxs-check-circle'></i><br />
                                                <span>Social Media Manager</span>
                                            </h2>
                                            <a href="#" target="_blank"><i class='bx bxl-facebook-square' ></i></a>
                                            <a href="#" target="_blank"><i class='bx bxl-instagram-alt' ></i></a>
                                        </div>

                                    </div>

                                    <div className="profile-text">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ut repellat distinctio assumenda provident inventore sunt eligendi. Doloribus aut expedita quibusdam, fugiat, aperiam magni iure, pariatur magnam voluptatibus fugit eveniet?</p>
                                    </div>

                                </div>

                            </SwiperSlide>

                            <SwiperSlide>

                                <div className="reviewTwo colleagues_review">

                                    <div className="profile d-flex align-items-center">

                                        <div className="profile-img">
                                            <img src={ReviewOne} alt="" width={'100%'} height={'85%'} />
                                        </div>

                                        <div className="profile-info">
                                            <h2>Bryl Lim<i class='bx bxs-check-circle'></i><br />
                                                <span>Instructor | Software Engineer</span>
                                            </h2>
                                        </div>

                                    </div>

                                    <div className="profile-text">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ut repellat distinctio assumenda provident inventore sunt eligendi. Doloribus aut expedita quibusdam, fugiat, aperiam magni iure, pariatur magnam voluptatibus fugit eveniet?</p>
                                    </div>

                                </div>

                            </SwiperSlide>

                            <SwiperSlide>

                                <div className="reviewOne colleagues_review">

                                    <div className="profile d-flex align-items-center">

                                        <div className="profile-img">
                                            <img src={ReviewOne} alt="" width={'100%'} height={'85%'} />
                                        </div>

                                        <div className="profile-info">
                                            <h2>Kient Lester<i class='bx bxs-check-circle'></i><br />
                                                <span>Marketer | Community Builder</span>
                                            </h2>
                                            <a href="#" target="_blank"><i class='bx bxl-facebook-square' ></i></a>
                                        </div>

                                    </div>

                                    <div className="profile-text">
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ut repellat distinctio assumenda provident inventore sunt eligendi. Doloribus aut expedita quibusdam, fugiat, aperiam magni iure, pariatur magnam voluptatibus fugit eveniet?</p>
                                    </div>

                                </div>

                            </SwiperSlide>

                        </Swiper>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Review;
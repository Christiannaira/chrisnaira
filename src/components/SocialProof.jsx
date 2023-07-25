
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import ReviewOne from '../assets/c1.jpg';

function SocialProof() {

    return (
        <>

            {/*social-proof section design*/}

            <section className="socialProof" id="socialProof">

                <div className="socialProof-content container-fluid-sm">

                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="proofProfile proofOne">

                                <div className="profile">

                                    <div className="profile-top d-flex align-items-center">

                                        <div className="profile-image">

                                            <img src={ReviewOne} alt="" />

                                        </div>

                                        <div className="profile-info">

                                            <h3 className='d-flex align-items-center'>Bryan Barnedo<i class='bx bxs-check-circle'></i></h3>
                                            <span>Freelancer | Web designer</span>

                                            <div className="ratings">
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="profile-text">

                                        <p>Working and collaborating with <span>christian</span> was one of the best thing I ever did. Not just because of his production quality but<span> he's just too good for his craft and easy to communicate with.</span>
                                            Not to mention that he's one i ask when it comes to technicalities in the web. Overall working with chris was worth it✨</p>

                                    </div>

                                    <div className="profile-links">

                                        <div className="profile-socials">
                                            <a href="https://www.facebook.com/profile.php?id=100094385670910" target="_blank"><i class='bx bxl-facebook-square' ></i></a>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </SwiperSlide>

                        <SwiperSlide>

                            <div className="proofProfile proofOne">

                                <div className="profile">

                                    <div className="profile-top d-flex align-items-center">

                                        <div className="profile-image">

                                            <img src={ReviewOne} alt="" />

                                        </div>

                                        <div className="profile-info">

                                            <h3 className='d-flex align-items-center'>John Carl Torcuador<i class='bx bxs-check-circle'></i></h3>
                                            <span>Social Media Manager</span>

                                            <div className="ratings">
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="profile-text">

                                        <p>Working and collaborating with <span>christian</span> was one of the best thing I ever did. Not just because of his production quality but<span> he's just too good for his craft and easy to communicate with.</span>
                                            Not to mention that he's one i ask when it comes to technicalities in the web. Overall working with chris was worth it✨</p>

                                    </div>

                                    <div className="profile-links">

                                        <div className="profile-socials">
                                            <a href="https://www.facebook.com/profile.php?id=100094385670910" target="_blank"><i class='bx bxl-facebook-square' ></i></a>
                                        </div>

                                    </div>

                                </div>

                            </div>


                        </SwiperSlide>

                        <SwiperSlide>

                            <div className="proofProfile proofOne">

                                <div className="profile">

                                    <div className="profile-top d-flex align-items-center">

                                        <div className="profile-image">

                                            <img src={ReviewOne} alt="" />

                                        </div>

                                        <div className="profile-info">

                                            <h3 className='d-flex align-items-center'>Reyson Carpio<i class='bx bxs-check-circle'></i></h3>
                                            <span>Full-Stack Developer | Colleague</span>

                                            <div className="ratings">
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                                <i class='bx bxs-star' ></i>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="profile-text">

                                        <p>Working and collaborating with <span>christian</span> was one of the best thing I ever did. Not just because of his production quality but<span> he's just too good for his craft and easy to communicate with.</span>
                                            Not to mention that he's one i ask when it comes to technicalities in the web. Overall working with chris was worth it✨</p>

                                    </div>

                                    <div className="profile-links">

                                        <div className="profile-socials">
                                            <a href="https://www.facebook.com/profile.php?id=100094385670910" target="_blank"><i class='bx bxl-facebook-square' ></i></a>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </SwiperSlide>

                    </Swiper>

                </div>

            </section>

        </>
    )

}

export default SocialProof;
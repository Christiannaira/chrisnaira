import Wave from '../assets/wave.gif'
import Happy from '../assets/happy.gif';
import Profile from '../assets/profile.jpg';;
import Profile2 from '../assets/profile2.jpg';;
import FastForward from '../assets/fast-forward.gif';
import AboutProfile from '../assets/about-profile.png';
import AboutProfile2 from '../assets/about-profile2.png';

function About() {
    return (
        <>

            {/* <section className="about" id="about">
                <div className="about-content container">

                    <div className="about-main">
                        <h2 className='d-flex align-items-center'>ABOUT ME <img src={Happy} alt="" width={'120px'} /> </h2>
                    </div>

                    <div className="about-text mt-3 ">

                        <div className="about-profile row align-items-center">
                            <div className='col-md-6'>
                                <p >I'm <span>Christian Naira</span>, 19 years old, currently living in Legazpi, Albay. I'm passionate about designing and developing web applications for businesses to <span>ensure its visibility and engagement throughout the digital world</span>. </p>
                                <p>I started to learn programming for fun back then on March 2022 where my first language is Python. Then I decided to dive in web development back then on August 2022 and so on.</p>
                            </div>
                            <div className="col-md-6">
                                <img src={Profile} alt="" width={'100%'} className='p1' />
                            </div>

                            <div className="col-md-6">
                                <img src={Profile2} alt="" width={'100%'} className='p2' />
                            </div>

                            <div className="col-md-6">
                                <p>I've explored a lot, I've been in 2 networking company. Being a networker is not an easy task, for you have to <span>talk to a lot of people to sell your products and propose the business plan</span>. I've been rejected multiple of times, but it's worth it.</p>
                                <p>And now, I've been interested doing self-improvement challenge by enhancing my discipline and resiliency throughout the process.</p>
                            </div>

                        </div>

                        .

                        <p className='highlights'>My goal for now is to assist companies in ensuring their web applications work properly, design aesthetically, and increase its visibility. I'm sure I will be able to develop as a builder in a corporate tech industry, enhance my leadership skills and team player ability in building multiple of projects that I can utilize in my future endeavor. My Goal from 2-7 years is to become a blockchain developer, built a startup, and handling agencies that offers services to clients.</p>

                        <div className="about-btn btn btn-primary">Say Hi!</div>

                    </div>

                </div>
            </section> */}

            <section className="about" id="about">

                <div className="about-content container-sm">

                    <div className="about-main ">
                        <span>know more</span>
                        <h2 className='d-flex align-items-center'>ABOUT ME <img src={FastForward} alt="" width={'100px'} className='rounded-pill ms-3' /> </h2>
                    </div>

                    <div className="about-profile row align-items-center">

                        <div className="about-profile-img col-md-6">
                            <img src={AboutProfile2} alt="" width={'100%'} />
                        </div>

                        <div className="about-profile-text col-md-6">

                            <p><img src={Wave} alt="" width={'40px'} /> I'm <span>Christian Naira</span>, 19 years old, currently living in Legazpi, Albay. I'm passionate about designing and developing web applications for businesses to <span>ensure its visibility and engagement throughout the digital world</span>. </p>
                            <p>I started to learn programming for fun back then on March 2022 where my first language is Python. Then I decided to dive in web development back then on August 2022 and so on.</p>
                            <a href="" className='btn btn-dark'>Connect with me!</a>
                        </div>


                    </div>

                </div>

            </section>

        </>
    )
}

export default About;
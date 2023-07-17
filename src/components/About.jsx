import FastForward from '../assets/fast-forward.gif';
import Wave from '../assets/wave.gif';

function About() {
    return (
        <>
            <section className="skills" id="skills">
                <div className="skills-content container">

                    <div className="skillset-content ">
                        <h2 className='d-flex align-items-center'>SKILLS <img src={FastForward} alt="" width={'40px'} className='ms-1' /></h2>

                        <div className="skillset">

                            {/*frontend*/}
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>JAVASCRIPT</span>
                            <span>REACT</span>
                            <span>BOOTSTRAP</span>
                            <span>JQUERY</span>

                            {/*backend*/}

                            <span>PHP</span>
                            <span>MYSQL</span>
                            <span>LARAVEL</span>
                            <span>FIREBASE</span>
                            <span>PYTHON</span>

                            {/*tools*/}

                            <span>CHATGPT</span>
                            <span>GIT</span>
                            <span>VERCEL</span>
                            <span>POSTMAN</span>
                            <span>FIGMA</span>
                            <span>CANVA</span>
                            <span>ILLUSTRATOR</span>

                        </div>

                    </div>

                </div>
            </section>

            <section className="about" id="about">
                <div className="about-content container">

                    <h2 className='d-flex align-items-center'>KNOW MORE ABOUT ME <img src={Wave} alt="" width={'40px'} className='ms-1' /></h2>

                    <div className="about-text">
                        <p>
                            <span className='main-par'>
                                I'm Christian Naira, 19 years old, lived in Legazpi Albay. I love to develop and design websites for businesses to <span style={{ color: 'yellow' }}>ensure their presence and engagement in the internet</span>.
                                <br /> <br />
                                It all started back in March 2022 where I decided to learn programming for fun, and Python was my first language I used and learned. Then I decided to dive in web development back in August 2022, <span style={{ color: 'yellow' }}>built website templates</span> just to enhance my abilities.
                                <br /><br />
                                I have this goal next 2-5 years to become a <span style={{ color: 'yellow' }}>blockchain developer</span>, learning about web3 and diving into blockchain technology; However, my first step is to experience corporate work in Tech Industry because I really want to learn and grow as an aspiring builder.
                                <br /><br />
                                <a href="" className="btn btn-primary">Say Hello!</a>
                            </span>

                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
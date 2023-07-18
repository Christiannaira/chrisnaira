import ArrowDown from '../assets/down.gif';

function Hero() {
    return (
        <>

            <section className="hero" id="hero">

                <div className="hero-content container-sm  ">

                    <div className="hero-main ">

                        <h2>Hi there! </h2>
                        <h1 className="text">I'm Christian Naira</h1>
                        <h3 className="text">Junior Full-Stack Developer | Web Designer</h3>
                        <p>I love designing & building web applications responsively, <br />interactively and aesthetically through React projects.</p>

                        <div className="hero-btn d-flex align-items-center">
                            <a href="#" className="btn btn-primary">Say Hello!</a>

                            <div className="hero-social-links">
                                <a href="https://github.com/Christiannaira" target="_blank"><i class='bx bxl-github'></i></a>

                                <a href="https://www.facebook.com/profile.php?id=100094385670910" target="_blank"><i class='bx bxl-facebook-square' ></i></a>

                                <a href="https://www.linkedin.com/in/christian-naira-379b1b283/" target="_blank"><i class='bx bxl-linkedin-square' ></i></a>

                                <a href="https://www.instagram.com/chanakunz/" target="_blank"><i class='bx bxl-instagram-alt'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={ArrowDown} alt="" width={'50px'} />
            </section>

        </>
    )
}

export default Hero;
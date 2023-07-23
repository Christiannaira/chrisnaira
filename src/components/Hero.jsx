
function Hero() {

    return (
        <>

            {/*hero section design*/}

            <section className="hero" id="hero">

                <div className="hero-content container-fluid-sm  ">

                    <div className="hero-main">
                        <span className="greetings">Hi there!</span>
                        <h1 className="text">I'm Christian Naira!</h1>
                        <span className="title text">Full-Stack Developer | Web Designer</span>
                        <p>I bring creativity, precision, and a dedication <br /> to deliver <span>innovative web solutions</span> that exceed expectations.</p>

                    </div>

                    <div className="hero-btn d-flex align-items-center">

                        <a href="" className="btn btn-dark">Say Hello</a>

                        <div className="hero-social-links">
                            <a href="https://github.com/Christiannaira" target="_blank"><i class='bx bxl-github'></i></a>

                            <a href="https://www.facebook.com/profile.php?id=100094385670910" target="_blank"><i class='bx bxl-facebook-square' ></i></a>

                            <a href="https://www.linkedin.com/in/christian-naira-379b1b283/" target="_blank"><i class='bx bxl-linkedin-square' ></i></a>

                            <a href="https://www.instagram.com/chanakunz/" target="_blank"><i class='bx bxl-instagram-alt'></i></a>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )

}

export default Hero;
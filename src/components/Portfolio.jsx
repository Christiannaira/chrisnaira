import FastForward from '../assets/fast-forward.gif';




function Portfolio() {
    return (
        <>
            <div data-aos="fade-up"
                data-aos-duration="10000"
            >

                <section className="portfolio" id="portfolio">

                    <div className="portfolio-content container-sm">

                        <div className="portfolio-main ">
                            <span>previous</span>
                            <h2 className='d-flex align-items-center'>PROJECTS <img src={FastForward} alt="" width={'100px'} className='rounded-pill ms-3' /> </h2>
                        </div>

                        <div className="portfolio-projects row">

                            <div className="project01 project col-md-12">
                                <h2>ESTYLE</h2>
                            </div>

                            <div className="tools col-md-12">
                                <h4>tools used:
                                    <span>Html5</span>
                                    <span>Css3</span>
                                    <span>Javascript</span>
                                    <span>Bootstrap</span>
                                    <span>Git</span>
                                    <span>Vercel</span>
                                    <span>Figma</span>
                                    <span>Canva</span>
                                </h4>
                            </div>

                            <div className="project02 project col-md-12">
                                <h2>EHUB</h2>
                            </div>

                            <div className="tools col-md-12">
                                <h4>tools used:
                                    <span>Html5</span>
                                    <span>Css3</span>
                                    <span>Javascript</span>
                                    <span>Bootstrap</span>
                                    <span>Git</span>
                                    <span>Vercel</span>
                                    <span>Figma</span>
                                    <span>Canva</span>
                                    <span>ReactJs</span>
                                    <span>PostMan</span>
                                    <span>Npm</span>
                                    <span>Firebase</span>
                                    <span>WebApis</span>
                                </h4>
                            </div>

                            <div className="project03 project col-md-12">
                                <h2>FUELFLOW</h2>
                            </div>

                            <div className="tools col-md-12">
                                <h4>tools used:
                                    <span>Html5</span>
                                    <span>Css3</span>
                                    <span>Javascript</span>
                                    <span>Bootstrap</span>
                                    <span>Git</span>
                                    <span>Vercel</span>
                                    <span>Figma</span>
                                    <span>Canva</span>
                                    <span>ReactJs</span>
                                    <span>PostMan</span>
                                    <span>Npm</span>
                                    <span>Firebase</span>
                                    <span>Php</span>
                                    <span>MySql</span>
                                    <span>Laravel</span>
                                </h4>
                            </div>





                        </div>

                    </div>

                </section>



            </div>


        </>
    )
}

export default Portfolio;
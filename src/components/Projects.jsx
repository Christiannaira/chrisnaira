import Estyle from '../assets/project01.png';
import Ehub from '../assets/project02.png';
import FuelFlow from '../assets/project03.png';

function Projects() {

    return (
        <>

            <section className="projects" id="projects">
                <div className="projects-content container-fluid-sm">

                    <div className="projects-main">
                        <span>recent</span>
                        <h2>PROJECTS</h2>
                    </div>

                    <div className="project-demos">

                        <div className="project-demo row">

                            <div className="project-img col-md-6 demoOne">

                                <img src={Estyle} alt="" />

                                <div className="layer">

                                    <div className="project-tools">

                                        <span>html</span>
                                        <span>css</span>
                                        <span>javascript</span>
                                        <span>bootstrap</span>
                                        <span>figma</span>
                                        <span>canva</span>
                                        <span>git</span>
                                        <span>vercel</span>
                                        <span>Illustrator</span>

                                    </div>

                                </div>

                            </div>

                            <div className="project-img col-md-6 demoTwo">

                                <img src={Ehub} alt="" />
                                <div className="layer">


                                    <div className="project-tools">

                                        <span>html</span>
                                        <span>css</span>
                                        <span>javascript</span>
                                        <span>bootstrap</span>
                                        <span>figma</span>
                                        <span>canva</span>
                                        <span>git</span>
                                        <span>vercel</span>
                                        <span>WebApis</span>
                                        <span>React</span>
                                        <span>Postman</span>
                                        <span>Illustrator</span>
                                        <span>firebase</span>

                                    </div>

                                </div>
                            </div>

                            <div className="project-img col-md-6 demoThree">

                                <img src={FuelFlow} alt="" />
                                <div className="layer">


                                    <div className="project-tools">

                                        <span>html</span>
                                        <span>css</span>
                                        <span>javascript</span>
                                        <span>bootstrap</span>
                                        <span>figma</span>
                                        <span>canva</span>
                                        <span>git</span>
                                        <span>vercel</span>
                                        <span>WebApis</span>
                                        <span>React</span>
                                        <span>Postman</span>
                                        <span>Illustrator</span>
                                        <span>mysql</span>
                                        <span>php</span>
                                        <span>laravel</span>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )


}

export default Projects;
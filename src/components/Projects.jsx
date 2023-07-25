import Estyle from '../assets/project01.png';
import Ehub from '../assets/project02.png';
import FuelFlow from '../assets/project03.png';
import FastForward from '../assets/fast-forward.gif';

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

                        <div className="project-demo ">

                            <div className="project-img demoOne">

                                <img src={Estyle} alt="" />

                                <div className="project-txt">

                                    <h3>Estyle <img src={FastForward} alt="" /></h3>

                                    <p>Estyle is an ecommerce platform where users who like fashions can purchase what they want to try. I built this in span of 1 week due to other life activities. It is awarded as the <span>BEST PROJECT ONE</span> in the bootcamp. <span>(currently rebuilding)</span></p>

                                </div>

                                <div className="project-tech">

                                    <h3>Tech Stacks: </h3>

                                    <div className="tools">
                                        <span>html</span>
                                        <span>css</span>
                                        <span>javascript</span>
                                        <span>bootstrap</span>
                                        <span>figma</span>
                                        <span>canva</span>
                                        <span>git</span>
                                        <span>vercel</span>

                                    </div>

                                </div>

                                <div className="project-btn">
                                    <a href="" className='btn btn-primary'>view website</a>
                                    <a href="" className='btn btn-primary'>github repository</a>
                                </div>

                            </div>

                            <div className="project-img  demoTwo">

                                <img src={Ehub} alt="" />


                                <div className="project-txt">

                                    <h3>Ehub <img src={FastForward} alt="" /></h3>

                                    <p>Ehub a viewing books website where a user can search an author, books and genres he/she wants to find. <span>(currently rebuilding)</span></p>

                                </div>

                                <div className="project-tech">

                                    <h3>Tech Stacks:</h3>

                                    <div className="tools">

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

                                <div className="project-btn">
                                    <a href="" className='btn btn-primary'>view website</a>
                                    <a href="" className='btn btn-primary'>github repository</a>
                                </div>


                            </div>

                            <div className="project-img demoThree">

                                <img src={FuelFlow} alt="" />


                                <div className="project-txt">

                                    <h3>FuelFlow <img src={FastForward} alt="" /></h3>

                                    <p>FuelFlow is a web application where a user can order a fuel for his vehicle just using his/her device converniently. <span>(currently building)</span></p>
                                </div>

                                <div className="project-tech">

                                    <h3>Tech Stacks: </h3>

                                    <div className="tools">
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

                                <div className="project-btn">
                                    <a href="" className='btn btn-primary disabled'>not available for now</a>
                                    <a href="" className='btn btn-primary'>github repository</a>
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
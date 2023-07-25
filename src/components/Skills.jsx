import Design from '../assets/design.png';
import Code from '../assets/code.png';
import Coding from '../assets/coding.gif';
import Responsive from '../assets/computer.gif';
import Algorithm from '../assets/algorithm.gif';

function Skills() {
    return (
        <>

            {/*skills section layout*/}
            <section className="skills" id="skills">

                <div className="skills-content container-fluid-sm">



                    <div className="skills-services">

                        <div className="service">

                            <h3>Front-end <br /> Development</h3>

                            <div className="service-img">
                                <img src={Coding} alt="" />
                            </div>

                            <div className="service-txt">

                                <p>Creation of web design using figma, canva, illustrator and photoshop. Development through Html, Css, Javascript, Jquery, Bootstrap, and React</p>

                            </div>

                        </div>
                        <div className="service">

                            <h3>Backend <br /> Development</h3>

                            <div className="service-img">
                                <img src={Algorithm} alt="" />
                            </div>

                            <div className="service-txt">

                                <p>Scripting the algorithm of the whole web application through Php, Python, Sql, Postman, Vercel, Git, Nodejs and Laravel.</p>

                            </div>

                        </div>
                        <div className="service">

                            <h3>Web <br /> Responsiveness</h3>

                            <div className="service-img">
                                <img src={Responsive} alt="" />
                            </div>

                            <div className="service-txt">

                                <p>Ensuring the flexibility of the website in any device without losing its quality.</p>

                            </div>


                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Skills;
import Design from '../assets/design.png';
import Code from '../assets/code.png';

function Skills() {
    return (
        <>

            {/*skills section layout*/}
            <section className="skills" id="skills">

                <div className="skills-content container-fluid-sm">

                    <div className="skills-main">

                        <h2>"I don't simply build websites"</h2>

                    </div>

                    <div className="skills-demo">

                        <p>I transform ideas into reality, ensuring seamless user experiences that captivate and convert.</p>

                    </div>

                    <div className="skills-services">

                        <div className="demo">

                            <h2>01</h2>
                            <p><span>Efficient programming</span> includes variety of factors. The code should be written clean, the website should be interactive and responsive, and the web application should be fast. These practices make the website optimized.</p>
                        </div>

                        <div className="demo">

                            <h2>02</h2>
                            <p><span>Great UI/UX</span> design on the website is crucial, for it captivates the attention of the viewers. The website should be perfectly structured, good graphical designs, choice of colors, good choice of typography, high quality images, and clear contexts. This serves as an efficient web design.</p>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Skills;
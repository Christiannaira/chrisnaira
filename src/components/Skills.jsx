import FastForward from '../assets/fast-forward.gif';

function Skills() {
    return (
        <>
            <section className="skills" id="skills">

                <div className="skills-content container-sm">

                    <div className="skills-main ">
                        <h2 className='d-flex align-items-center'>SKILLS <img src={FastForward} alt="" width={'100px'} className='rounded-pill ms-3' /> </h2>
                    </div>

                    <div className="skills-category">

                        <div className="category category01">

                            <h2>Front-End</h2>
                            <p>Building front-end web applications from scratch using Html5, Css3, Javascript, React, Jquery and Bootstrap.</p>

                        </div>

                        <div className="category category02">

                            <h2>Back-End</h2>
                            <p>Developing back-end codes with the use of Php, Laravel, Mysql, Nodejs and Python.</p>

                        </div>

                        <div className="category category03">

                            <h2>Tools</h2>
                            <p>Maximizing development tools like Figma, Postman, Git, Vercel, Chatgpt and canva.</p>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Skills;
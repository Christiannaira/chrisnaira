import FastForward from '../assets/fast-forward.gif';


function Portfolio() {
    return (
        <>

            <section className="portfolio" id="portfolio">

                <div className="portfolio-content container-sm border">

                    <div className="portfolio-main">
                        <h1 className='d-flex align-items-center'>PROJECTS <img src={FastForward} alt="" width={'100px'} className='rounded-pill ms-3' /> </h1>
                    </div>

                    <div className="portfolio-projects row">

                        <div className="project01 project col-md-12">
                            asd
                        </div>


                        <div className="project01 project col-md-12">
                            asd
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Portfolio;
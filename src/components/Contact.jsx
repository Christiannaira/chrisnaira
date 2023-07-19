import Happy from '../assets/happy.gif';

function Contact() {
    return (
        <>

            <section className="contact" id="contact">

                <div className="contact-content container-sm">

                    <div className="contact-main">

                        <h2 className='d-flex align-items-center'>GET IN TOUCH <img src={Happy} alt="" width={'100px'} className='rounded-pill ms-3' /> </h2>

                    </div>

                    <div className="contact-info d-flex align-items-center">

                        <h3><span>Mobile Number:</span> 0950-588-9037</h3>
                        <h3 className='ms-5'><span>Email Address:</span> christianmnaira@gmail.com</h3>

                    </div>



                </div>
            </section>

        </>
    )
}

export default Contact;
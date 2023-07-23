
function Navigational() {
    return (
        <>

            {/*navigation section design*/}

            <section className="navigation" id="navigation">

                <div className="navigation-content container-fluid-sm">

                    <div className="navigation-main d-flex align-items-center justify-content-between">

                        <div className="logo">Chris.</div>

                        <div className="navlist">
                            <a href="">home</a>
                            <a href="">portfolio</a>
                            <a href="">about</a>
                        </div>

                        <a href="" className="lightmode"><i class='bx bx-moon' id="bx"></i></a>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Navigational;
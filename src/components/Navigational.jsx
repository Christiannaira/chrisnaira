
function Navigational() {

    function Turn() {

        if (document.body.className === 'lightmode') {
            document.body.className = '';
            bx.className = bx.className.replace("bx bxs-moon", "bx bx-moon")


        } else {
            document.body.className = 'lightmode';
            bx.className = bx.className.replace("bx bx-moon", "bx bxs-moon")
        }

    }

    return (
        <>
            <section className="navigation" id="navigation">
                <div className="navigation-content d-flex align-items-center justify-content-around">

                    <a href="/" className="logo">Chris.</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#about">About</a>
                    <h2 onClick={() => {
                        Turn();
                    }}><i class='bx bx-moon' id="bx"></i></h2>

                </div>
            </section>
        </>
    )
}

export default Navigational;
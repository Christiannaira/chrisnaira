
function Navigational() {

    function Turn() {

        let bx = document.getElementById("bx");
        let hero = document.getElementById("hero");
        let nav = document.getElementById("navigation");

        // nav.style.backgroundColor = '#fff';

        // if (bx.className.includes('bx-moon')) {
        //     bx.className = 'bx bxs-moon';

        //     hero.style.backgroundColor = '#fff';
        // } else {
        //     bx.className = 'bx bxs-moon ';

        //     hero.style.backgroundColor = '#222';

        // }

        alert("this is dark mode")

    }

    return (
        <>
            <section className="navigation" id="navigation">
                <div className="navigation-content d-flex align-items-center justify-content-around">

                    <h2 className="logo">Chris.</h2>
                    <a href="">Portfolio</a>
                    <h2 onClick={() => {
                        Turn();
                    }}><i class='bx bx-moon' id="bx"></i></h2>

                </div>
            </section>
        </>
    )
}

export default Navigational;
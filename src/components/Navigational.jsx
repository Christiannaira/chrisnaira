
function Navigational() {

    function Turn() {

        // let bx = document.getElementById("bx");
        // let hero = document.getElementById("hero");
        // let nav = document.getElementById("navigation");

        // if (bx.className.includes("bx bx-moon")) {

        //     hero.style.backgroundColor = "#ccc";
        //     nav.style.backgroundColor = "#ccc";
        //     bx.className = bx.className.replace("bx bx-moon", "bx bxs-moon")

        //     hero.className += " lightmode";
        //     nav.className += " nav-lightmode";

        // } else {

        //     hero.style.backgroundColor = "#222";
        //     nav.style.backgroundColor = "#222";
        //     bx.className = bx.className.replace("bx bxs-moon", "bx bx-moon")

        //     hero.className = "hero";
        //     nav.className += "navigation";
        // }

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

                    <h2 className="logo">Chris.</h2>
                    <a href="/portfolio">Portfolio</a>
                    <a href="/about">About</a>
                    <h2 onClick={() => {
                        Turn();
                    }}><i class='bx bx-moon' id="bx"></i></h2>

                </div>
            </section>
        </>
    )
}

export default Navigational;
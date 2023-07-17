import Hero from "./Hero";
import About from "./About";
import Review from "./Reviews";
import Portfolio from "./Portfolio";
import Navigational from "./Navigational";

function Layout() {

    let cursor = document.querySelector(".cursor");
    let cursor2 = document.querySelector(".cursor2");

    document.addEventListener("mousemove", function (e) {

        cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";

    })

    return (
        <>

            <div className="cursor"></div>
            <div className="cursor2"></div>

            <Navigational />
            <Hero />


        </>
    )
}

export default Layout;
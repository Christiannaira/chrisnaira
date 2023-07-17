import Hero from "./Hero";
import About from "./About";
import Review from "./Reviews";
import Portfolio from "./Portfolio";
import Navigational from "./Navigational";
import { useEffect } from "react";

function Layout() {


    return (
        <>

            <div className="cursor"></div>
            <div className="cursor2"></div>

            <Navigational />
            <Hero />
            <About />


        </>
    )
}

export default Layout;
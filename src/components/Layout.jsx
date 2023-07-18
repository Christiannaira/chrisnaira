import Hero from "./Hero";
import About from "./About";
import Review from "./Reviews";
import Portfolio from "./Portfolio";
import Navigational from "./Navigational";
import Skills from "./Skills";
import Index from './Index';
import { useEffect } from "react";

function Layout() {


    return (
        <>

            <div className="cursor"></div>
            <div className="cursor2"></div>

            <Navigational />
            <Index />
            <Portfolio />
            <Skills />
            <Review />


        </>
    )
}

export default Layout;
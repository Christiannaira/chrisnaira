import Navigational from './Navigational';
import Hero from './Hero';
import SocialProof from './SocialProof';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Cta from './Cta';


function Layout() {

    return (
        <>

            <Navigational />
            <Hero />
            <SocialProof />
            <Cta />
            <Skills />
            <Projects />
            <About />

        </>
    )

}

export default Layout;
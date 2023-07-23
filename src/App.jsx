import { useEffect } from 'react';
import Navigational from './components/Navigational';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';

function App() {

  {/*cursor section layout*/ }
  useEffect(() => {
    let cursor = document.querySelector(".cursor");
    let cursor2 = document.querySelector(".cursor2");


    document.addEventListener("mousemove", function (e) {

      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";

    })
  }, []);

  return (

    <>
      <link rel="stylesheet"
        href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"></link>

      <div className="cursor"></div>
      <div className="cursor2"></div>

      <Navigational />
      <Hero />
      <SocialProof />
      <Skills />
      <Projects />
      <About />
    </>
  )
}

export default App

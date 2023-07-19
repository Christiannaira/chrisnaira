import Layout from "./components/Layout";
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

function App() {

  useEffect(() => {
    let cursor = document.querySelector(".cursor");
    let cursor2 = document.querySelector(".cursor2");


    document.addEventListener("mousemove", function (e) {

      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";

    })
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (

    <>
      <link rel="stylesheet"
        href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"></link>

      <Layout />






    </>
  )
}

export default App

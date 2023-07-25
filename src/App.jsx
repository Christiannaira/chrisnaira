import { useEffect } from 'react';
import Layout from './components/Layout';

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

      <Layout />
    </>
  )
}

export default App

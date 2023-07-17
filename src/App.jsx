import Layout from "./components/Layout"

function App() {

  let cursor = document.querySelector(".cursor");
  let cursor2 = document.querySelector(".cursor2");


  document.addEventListener("mousemove", function (e) {

    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";

  })

  return (
    <>
      <link rel="stylesheet"
        href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"></link>

      <Layout />



    </>
  )
}

export default App

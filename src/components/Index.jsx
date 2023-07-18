import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Hero from "./Hero";
import Portfolio from './Portfolio';

function Index() {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route index element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Index;
import {Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import HomePage from "./pages/HomePage.jsx";
import KelasPage from "./pages/KelasPage.jsx";
import TestimonialPage from "./pages/TestimonialPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" Component={HomePage}/>
                <Route path="/kelas" Component={KelasPage}/>
                <Route path="/testimonial" Component={TestimonialPage}/>
                <Route path="/faq" Component={FaqPage}/>
                <Route path="/syarat-ketentuan" Component={SyaratKetentuanPage}/>
                <Route path="*" Component={NotFoundPage}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default App

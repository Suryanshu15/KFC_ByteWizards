import { BrowserRouter, Route, Routes } from "react-router-dom"
import Default from "./components/DefaultLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/navbar.component"
import Footer from "./components/Footer"
import Menu from './menu/Menulist';
import Carosal from "./components/carousal/carosal.component"
import Deal from './Deal/Deal'
import { ClassNames } from "@emotion/react";

function App() {
  return (
    < >
        <BrowserRouter>
          <Navbar />
          <Carosal />
          <Routes>
            <Route path="/" element={<Default />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/deal" element={<Deal />} />
         
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;

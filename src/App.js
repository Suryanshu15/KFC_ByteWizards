import { BrowserRouter, Route,Routes } from "react-router-dom"
import Default from "./components/DefaultLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/navbar.component"
import Footer from "./components/Footer"
import Menu from '../src/menu/Menu';
import Deal from './components/Deal'


// import Temp from "./components/temp";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar /> 
    <Routes>
      <Route path="/" element={<Default />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;

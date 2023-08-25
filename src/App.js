import { BrowserRouter, Route,Routes } from "react-router-dom"
import Default from "./components/DefaultLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/navbar.component"
import Footer from "./components/Footer"
import Menu from '../src/menu/Menu';
import Carosal from "./components/carousal/carosal.component"
import login from './components/Login/login'
import Deal from './Deal/Deal'
// import Temp from "./components/temp";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar /> 
    <Carosal />
    <Routes>
      <Route path="/" element={<Default />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/deal" element={<Deal />} />
      <Route path="/login" element={<login />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;

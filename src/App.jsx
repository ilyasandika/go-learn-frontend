import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import {Route, Routes} from "react-router-dom";
import Learn from "./pages/Learn.jsx";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/learn/*" element={<Learn />}/>
        </Routes>
    </>
  )
}

export default App

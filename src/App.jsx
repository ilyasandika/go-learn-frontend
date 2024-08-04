import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import {Route, Routes} from "react-router-dom";
import Learn from "./pages/Learn.jsx";
import 'react-quill/dist/quill.snow.css';
import {AuthRequired, GuestOnly} from "./api/middleware.jsx";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<GuestOnly><Login/></GuestOnly>}/>
            <Route path="/register" element={<GuestOnly><Register/></GuestOnly>}/>
            <Route path="/learn/*" element={<AuthRequired><Learn /></AuthRequired>}/>
        </Routes>
    </>
  )
}

export default App

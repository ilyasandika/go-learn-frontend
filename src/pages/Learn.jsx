import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Articles from "./Articles.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import Header from "../components/header/Header.jsx";
import {useState} from "react";
import InnerFooter from "../components/footer/InnerFooter.jsx";

function Learn() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
    <div className="flex flex-row">
        <Sidebar  isOpen={isOpen}/>
        <div className={`w-full flex flex-col justify-between h-full`}>
            <Header isOpen={isOpen} onClick={toggleSidebar}/>
            <div className="bg-slate-100 h-full p-10 rounded-t-xl">
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="articles" element={<Articles/>}/>
                </Routes>
            </div>
            <InnerFooter />
        </div>
    </div>
  )
}

export default Learn

import Button from "../Button.jsx";
import {useNavigate} from "react-router-dom";
import NavigateTo from "../../helper/Navigate.jsx";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="max-w-screen-lg mx-auto flex flex-row w-full items-center mt-8">
            <div className="w-1/2 text-left">
                <h1 className="text-4xl font-semibold text-left leading-tight">Bangun Karirmu Sebagai Developer Profesional</h1>
                <p className="text-lg text-left mt-2 mb-6">Bersama Go Academy Wujudkan Mimpi</p>
                <Button onClick={()=>{NavigateTo(navigate, "/login")}} text="Belajar Sekarang" className="px-8 py-3 bg-slate-800 text-gray-50 hover:bg-white hover:text-gray-800"/>
            </div>
            <div className="w-1/2">
                <img src="/homepage-hero.png" alt="homepage-hore" className="" />
            </div>
        </div>
    )
}

export default Hero;
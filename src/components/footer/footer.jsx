import Logo from "../Logo.jsx";
import Button from "../Button.jsx";
import {useNavigate} from "react-router-dom";
import NavigateTo from "../../helper/Navigate.jsx";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="max-w-screen-lg mt-8 mx-auto">
            <hr className="mb-16"/>
            <div className="flex justify-between gap-16">
                <div className="flex flex-1 flex-col items-start">
                    <Logo src="/main-logo.svg" alt="main-logo" className="h-8 items-start"/>
                    <p className="text-left text-sm mt-5 leading-6">GoAcademy adalah platform pembelajaran online
                        terinspirasi dari dicoding.com yang
                        dikembangkan
                        sebagai bagian dari tugas UAS Pemrograman Web 2, Universitas Siber Asia</p>
                </div>

                <div className="flex flex-1 flex-col items-start">
                    <p className="text-left font-bold text-2xl mb-4">Build Your Skill</p>
                    <p className="text-left font-bold text-2xl">Climb The Hill</p>
                </div>

                <div className="flex flex-1 flex-col items-start">
                    <p className="text-left font-bold text-2xl mb-6">Siap Go-ers selanjutnya?</p>
                    <div className="flex gap-2">
                        <Button onClick={() => {
                            NavigateTo(navigate, "/login")
                        }} text="Masuk" className="hover:bg-slate-800 hover:text-gray-50"/>
                        <Button onClick={() => {
                            NavigateTo(navigate, "/register")
                        }} text="Daftar" className="bg-slate-800 text-gray-50 hover:bg-white hover:text-gray-800"/>
                    </div>
                </div>


            </div>
            <hr className="mt-8"/>
            <div className="text-center my-4">
                <p className="text-sm">© 2024 Kelompok Dua Belas IT-401. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
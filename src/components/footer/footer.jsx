import Logo from "../Logo.jsx";
import Button from "../Button.jsx";

const Footer = () => {
    return (
        <>
            <div className="flex justify-between">
                <div className="flex flex-col items-start w-96">
                    <Logo src="/main-logo.svg" alt="main-logo" className="h-8 items-start"/>
                    <p className="w-1/2 text-left text-base mt-5">GoAcademy adalah platform pembelajaran online yang
                        dikembangkan
                        sebagai bagian dari tugas UAS Pemrograman Web 2, Universitas Siber Asia</p>
                </div>

                <div className="flex flex-col items-start w-96">
                    <p className="w-1/2 text-left font-bold text-2xl mb-4">Build Your Skill</p>
                    <p className="w-1/2 text-left font-bold text-2xl">Climb The Hill</p>
                </div>

                <div className="flex flex-col items-start w-96">
                    <p className="w-1/2 text-left font-bold text-2xl mb-6">Siap Go-ers selanjutnya?</p>
                    <div className="flex space-x-4">
                        <Button text="Masuk" className="hover:bg-slate-800 hover:text-gray-50"/>
                        <Button text="Daftar" className="bg-slate-800 text-gray-50 hover:bg-white hover:text-gray-800"/>
                    </div>
                </div>


            </div>
            <hr className="my-6"/>
            <div className="text-center">
                <p className="text-sm">© 2024 Kelompok Dua Belas IT-401. All Rights Reserved.</p>
            </div>
        </>
    )
}

export default Footer;
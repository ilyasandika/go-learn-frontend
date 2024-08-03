import Navbar from '../components/navbar/Navbar.jsx'
import Footer from "../components/footer/footer.jsx";
import Button from "../components/Button.jsx"
import InputWithLabel from "../components/InputWithLabel.jsx";
import {useNavigate} from "react-router-dom";
import NavigateTo from "../helper/Navigate.jsx";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col">
            <Navbar/>
            <div className="my-10 w-96 mx-auto text-left">
                <h1 className="font-bold text-2xl mb-6">Masuk</h1>
                <InputWithLabel className="w-full mb-4" id="userName" name="userName" label="Username"
                                placeholder="Masukkan username anda"/>
                <InputWithLabel className="w-full mb-4" id="password" name="password" label="Password"
                                placeholder="Masukkan password anda"/>
                <Button text="Masuk" onClick={() => {
                    NavigateTo(navigate, "/learn/dashboard")
                }} className="mt-1 w-full bg-slate-800 text-white hover:bg-white hover:text-slate-800"/>
                <div className="my-6 flex items-center justify-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="mx-4 text-gray-500">Belum mempunyai akun?</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <Button text="Daftar" onClick={() => {
                    NavigateTo(navigate, "/register")
                }} className="mt-1 w-full bg-white :text-slate-800 hover:bg-slate-800 hover:text-white "/>
                <p className="text-xs text-center mt-3">Dengan melanjutkan, Anda menyetujui penggunaan data sesuai
                    dengan [Kebijakan Privasi] dan [Syarat & Ketentuan] yang berlaku.
                </p>
            </div>


            <Footer/>
        </div>
    )
}

export default Login

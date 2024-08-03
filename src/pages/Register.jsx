import Navbar from '../components/navbar/Navbar.jsx'
import Footer from "../components/footer/footer.jsx";
import Button from "../components/Button.jsx"
import InputWithLabel from "../components/InputWithLabel.jsx";
import {useNavigate} from "react-router-dom";
import NavigateTo from "../helper/Navigate.jsx";
import {useState} from "react";
import {registerUser} from "../api/authApi.jsx";

const Register = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleFullNameChange = (e) => setFullName(e.target.value);
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!fullName || !username || !password) {
            alert("Semua field harus diisi!");
            return;
        }

        const userData = {
            full_name : fullName,
            username : username,
            password : password,
        };

        try {
            const response = await registerUser(userData);
            alert(`Registrasi ${response.data.profile.full_name} berhasil`)
            navigate("/login");
        } catch (error) {
            alert(`Registrasi gagal: " ${error.message} ${error.error} `);
        }

    };

    return (
        <div className="flex flex-col">
            <Navbar/>
            <div className="my-10 w-96 mx-auto text-left">
                <h1 className="font-bold text-2xl mb-6">Daftar Akun Go Academy</h1>
                <form onSubmit={handleSubmit}>
                    <InputWithLabel
                        className="w-full mb-4"
                        id="fullName"
                        name="fullName"
                        label="Nama Lengkap"
                        placeholder="Masukkan nama lengkap anda"
                        value={fullName}
                        onChange={handleFullNameChange}
                    />
                    <InputWithLabel
                        className="w-full mb-4"
                        id="username"
                        name="username"
                        label="Username"
                        placeholder="Masukkan username anda"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    <InputWithLabel
                        className="w-full mb-4"
                        id="password"
                        name="password"
                        label="Password"
                        placeholder="Masukkan password anda"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <Button text="Daftar"
                            className="mt-1 w-full bg-slate-800 text-white hover:bg-white hover:text-slate-800"/>
                </form>
                <div className="my-6 flex items-center justify-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="mx-4 text-gray-500">Sudah mempunyai akun?</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <Button text="Login" onClick={() => navigate("/login")}
                        className="mt-1 w-full bg-white :text-slate-800 hover:bg-slate-800 hover:text-white "/>
                <p className="text-xs text-center mt-3">Dengan melanjutkan, Anda menyetujui penggunaan data sesuai
                    dengan [Kebijakan Privasi] dan [Syarat & Ketentuan] yang berlaku.
                </p>

            </div>
            <Footer/>
        </div>
    )
}

export default Register

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar.jsx';
import Button from "../components/Button.jsx";
import InputWithLabel from "../components/InputWithLabel.jsx";
import NavigateTo from "../helper/Navigate.jsx";
import { loginUser } from '../api/authApi';
import Footer from "../components/footer/footer.jsx";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setErrorMessage("Username dan Password harus diisi!");
            return;
        }

        const userData = {
            username,
            password,
        };

        try {
            const data = await loginUser(userData);
            alert("Login Success");
            navigate("/learn/dashboard");
        } catch (error) {
            setErrorMessage(error.error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow my-10 w-96 mx-auto text-left">
                <h1 className="font-bold text-2xl mb-6">Masuk</h1>
                <form onSubmit={handleSubmit}>
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
                    <Button text="Masuk" type="submit" className="mt-1 w-full bg-slate-800 text-white hover:bg-white hover:text-slate-800" />
                    {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
                </form>
                <div className="my-6 flex items-center justify-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="mx-4 text-gray-500">Belum mempunyai akun?</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <Button text="Daftar" onClick={() => { NavigateTo(navigate, "/register") }} className="mt-1 w-full bg-white text-slate-800 hover:bg-slate-800 hover:text-white" />
                <p className="text-xs text-center mt-3">
                    Dengan melanjutkan, Anda menyetujui penggunaan data sesuai dengan <a href="/privacy-policy" className="underline">Kebijakan Privasi</a> dan <a href="/terms-conditions" className="underline">Syarat & Ketentuan</a> yang berlaku.
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Login;

import InputWithLabel from "../components/InputWithLabel.jsx";
import Navbar from "../components/navbar/Navbar.jsx";
import Button from "../components/Button.jsx";
import NavigateTo from "../helper/Navigate.jsx";
import Footer from "../components/footer/footer.jsx";

const AccountSettings = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="my-10 w-full text-left bg-white p-16 rounded-xl">
                    <h1 className="font-bold text-xl mb-6">ACCOUNT SETTINGS</h1>
                    <InputWithLabel className="w-full mb-4" id="userName" name="userName" label="Username"
                                    placeholder="Masukkan username anda"/>
                    <InputWithLabel className="w-full mb-4" id="password" name="password" label="Password"
                                    placeholder="Kosongkan jika tidak ingin mengganti password"/>
                    <div className="space-x-2">
                        <Button text="Back" onClick={() => {
                            navigate(-1)
                        }} className="mt-1  bg-slate-800 text-white hover:bg-white hover:text-slate-800 rounded-sm"/>
                        <Button text="Save" onClick={() => {
                            navigate("/learn/dashboard")
                        }} className="mt-1  bg-slate-800 text-white hover:bg-white hover:text-slate-800 rounded-sm"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountSettings;
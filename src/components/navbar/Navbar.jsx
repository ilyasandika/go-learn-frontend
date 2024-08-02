import NavItem from "./NavItem.jsx";
import Button from "../Button.jsx";
import InputBox from "../InputBox.jsx";
import Logo from "../Logo.jsx";
import {useNavigate} from "react-router-dom";
import NavigateTo from "../../helper/Navigate.jsx";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="sticky top-0 bg-white border py-1 shadow-sm z-10">
            <div className=" max-w-screen-lg mx-auto flex items-center justify-between gap-10">
                <Logo src="/just-logo.svg" alt="main-logo" className="h-16 w-16"/>

                <InputBox type="text" id="homeSearchBox" name="homeSearchBox" className="w-full"
                          placeholder="Apa yang ingin anda pelajari hari ini?"/>

                <ul className="flex">
                    <NavItem text={"Home"} onClick={() => {
                        NavigateTo(navigate,"/")
                    }}/>
                    <NavItem text={"About"} onClick={() => {
                        NavigateTo(navigate,"/about")
                    }}/>
                    <NavItem text={"Article"} onClick={() => {
                        NavigateTo(navigate,"/article")
                    }}/>
                    <NavItem text={"Contact"} onClick={() => {
                        NavigateTo(navigate,"/contact")
                    }}/>
                </ul>

                <div className="flex gap-4">
                    <Button onClick={() => {
                        NavigateTo(navigate,"/login")
                    }} text="Masuk" className="hover:bg-slate-800 hover:text-gray-50"/>
                    <Button onClick={() => {
                        NavigateTo(navigate,"/register")
                    }} text="Daftar" className="bg-slate-800 text-gray-50 hover:bg-white hover:text-gray-800"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
import NavItem from "./NavItem.jsx";
import Button from "../Button.jsx";
import InputBox from "../InputBox.jsx";
import Logo from "../Logo.jsx";

const Navbar = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <Logo src="/just-logo.svg" alt="main-logo" className="h-16 w-16" />

                <InputBox type="text" className="w-96" placeholder="Apa yang ingin anda pelajari hari ini?" />

                <ul className="flex space-x-4">
                    <NavItem text={"Home"} href="/"/>
                    <NavItem text={"About"} href="/about"/>
                    <NavItem text={"Article"} href="/article"/>
                    <NavItem text={"Contact"} href="/contact"/>
                </ul>

                <div className="flex space-x-4">
                    <Button text="Masuk" className="hover:bg-slate-800 hover:text-gray-50"/>
                    <Button text="Daftar" className="bg-slate-800 text-gray-50 hover:bg-white hover:text-gray-800"/>
                </div>
            </div>


        </>
    )
}

export default Navbar;
import NavItem from "./NavItem.jsx";
import Button from "../Button.jsx";
import InputBox from "../InputBox.jsx";

const Navbar = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <img src="/logo_light.svg" alt="logo" className="h-12 w-12" />

                <InputBox type="text" className="w-96" placeholder="Apa yang ingin anda pelajari hari ini?" />

                <ul className="flex space-x-4">
                    <NavItem text={"Home"}/>
                    <NavItem text={"About"}/>
                    <NavItem text={"Article"}/>
                    <NavItem text={"Contact"}/>
                </ul>

                <div className="flex space-x-4">
                    <Button text="Masuk" className="hover:bg-gray-800 hover:text-gray-50"/>
                    <Button text="Daftar" className=" bg-gray-800 text-gray-50 hover:bg-white hover:text-gray-800"/>
                </div>
            </div>


        </>
    )
}

export default Navbar;
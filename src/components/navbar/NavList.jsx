import NavItem from "./NavItem.jsx";

const NavList = () => {
    return (
        <>
            <ul className="flex space-x-4">
                <NavItem text={"Home"}/>
                <NavItem text={"About"}/>
                <NavItem text={"Article"}/>
                <NavItem text={"Contact"}/>
            </ul>
        </>
    )
}

export default NavList;
const NavItem = (props) => {
   return <li onClick={props.onClick} className=" font-semibold text-gray-800 hover:bg-gray-100 px-4 py-3 rounded cursor-pointer">{props.text}</li>
}

export default NavItem;
const NavItem = (props) => {
   return <li><a href={props.href} className="font-semibold text-gray-800 hover:bg-gray-100 px-6 py-3 rounded cursor-pointer">{props.text}</a></li>
}

export default NavItem;
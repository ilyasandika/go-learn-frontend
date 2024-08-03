import { useState, useRef, useEffect } from 'react';
import NavigateTo from "../../helper/Navigate.jsx";
import {useNavigate} from "react-router-dom";

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <div onClick={toggleDropdown} className="flex items-center cursor-pointer">
                <img src="/Default_pfp.svg" alt="User Profile" className="w-8 h-8 rounded-full mr-2" />
                <span className="text-sm">Hi! Username</span>
            </div>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                    <a onClick={() => {
                        NavigateTo(navigate,"account-settings")
                    }} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:cursor-pointer">Account Settings</a>
                    <a onClick={() => {
                        NavigateTo(navigate,"/")
                    }} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:cursor-pointer">Logout</a>
                </div>
            )}
        </div>
    );
};

export default UserProfile;

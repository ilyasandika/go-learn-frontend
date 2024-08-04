import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const AuthRequired = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.post(`${API_BASE_URL}/auth/verify-auth`, "", {
                    withCredentials: true
                });
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };
        checkAuth();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return isAuthenticated ? children : navigate("/login");
};

export const AdminOnly = ({ children }) => {
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const from = location.state.from

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.post(`${API_BASE_URL}/auth/verify-auth`, "", {
                    withCredentials: true
                });
                if (response.status === 200 && response.data.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            } catch (error) {
                setIsAdmin(false);
            } finally {
                setIsLoading(false);
            }
        };
        checkAuth();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return isAdmin ? children : navigate(from);
};

export const UserOnly = ({ children }) => {
    const navigate = useNavigate();
    const [isUser, setIsUser] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.post(`${API_BASE_URL}/auth/verify-auth`, "", {
                    withCredentials: true
                });
                if (response.status === 200 && response.data.role === "user") {
                    setIsUser(true);
                } else {
                    setIsUser(false);
                }
            } catch (error) {
                setIsUser(false);
            } finally {
                setIsLoading(false);
            }
        };
        checkAuth();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return isUser ? children : navigate(-1);
};

export const GuestOnly = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.post(`${API_BASE_URL}/auth/verify-auth`, "", {
                    withCredentials: true
                });
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };
        checkAuth();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return isAuthenticated ?  navigate("/learn") : children;
};

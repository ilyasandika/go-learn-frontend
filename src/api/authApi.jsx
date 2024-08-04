import axios from 'axios';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/register`, userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, userData, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const logout = async () => {
    try {
       return await axios.post(`${API_BASE_URL}/auth/logout`,"",{
           withCredentials: true
       })
    } catch (error) {
        throw error.response;
    }
};



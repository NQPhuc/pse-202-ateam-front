import axios from 'axios';
import {backendAddress} from '../config.js'

export const axiosDefault = axios.create({
    baseURL: backendAddress,
    headers: {
        "Content-type": "application/json"
    }
});

export const axiosWithCookies = axios.create({
    baseURL: backendAddress,
    headers: {
        "Content-type": "application/json",
    },
    withCredentials: true,
});
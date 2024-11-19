import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';

let headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json'
};

const BACKEND_URL = 'https://api.zecrypt.io/api/';

const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    headers
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = reactLocalStorage.get('token'); // Retrieve token from localStorage
        if (token) {
            // Add both Authorization and token headers
            config.headers.Authorization = `Bearer ${token}`;
            config.headers.token = token; // Add token as a separate header
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    (response) =>
        new Promise((resolve, reject) => {
            resolve(response);
        }),
    (error) => {
        if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }

        if (error.response.status === 403) {
            // Handle 403 error
        } else {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    },
);

export default axiosInstance;

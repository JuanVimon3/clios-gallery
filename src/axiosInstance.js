import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'https://api.artic.edu/api/v1' });

export default axiosInstance;

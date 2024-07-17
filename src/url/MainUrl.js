import axios from 'axios'
export const MAIN_URL = 'https://algoritm-coin-production.up.railway.app/'
// export const MAIN_URL = 'http://192.168.0.119:8000/'

const axiosInstance = axios.create({
	baseURL: MAIN_URL,
	withCredentials: true,
})

export default axiosInstance

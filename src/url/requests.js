import axios from 'axios'
import { MAIN_URL } from './MainUrl'

export const getMethod = (url, setLoading, setData) => {
	axios.get(MAIN_URL + url).then(res => setData(res))
}

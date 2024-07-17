import axios from 'axios'
import { MAIN_URL } from '../url/MainUrl'

export const fetchUser = async setUser => {
	try {
		const res = await axios.get(`${MAIN_URL}auth/me`)
		if (res?.status === 202) {
			return setUser(true)
		}
		return setUser(false)
	} catch (err) {
		console.log('This error', err)
		return setUser(false)
	}
}
export const fetchUserWithData = setData => {
	try {
		axios.get(`${MAIN_URL}auth/me`).then(res => {
			return setData(res)
		})
	} catch (err) {
		return setData('error', err)
	}
}

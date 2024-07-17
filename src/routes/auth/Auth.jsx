import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { fetchUser } from '../../requests/GetRequest'

export default function Auth() {
	const [user, setUser] = useState(false)
	useEffect(() => {
		fetchUser(setUser)
	}, [])
	console.log('ok', user)
	return user ? <Outlet /> : <Navigate replace to={'/'} />
}

// import { useState } from "react";
import { Route, Routes } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Header from './components/header/Header'
import AddTeacher from './routes/addTeacher/AddTeacher'
import Admin from './routes/admin/Admin'
import ForgotPassword from './routes/forgotPassword/ForgotPassword'
import Login from './routes/login/Login'
import Statistics from './routes/statistics/Statistics'
import Students from './routes/students/Students'
import Teachers from './routes/teachers/Teachers'

function App() {
	// const [isLogin, setIsLogin] = useState(false);
	let isLogin = true
	return (
		<div className='App'>
			<Header isLogin={isLogin} />
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/admin' element={<Admin />} />
				<Route path='/teachers' element={<Teachers />} />
				<Route path='/students' element={<Students />} />
				<Route path='/statistics' element={<Statistics />} />
				<Route path='/addteacher' element={<AddTeacher />} />
				<Route path='/forgotpassword' element={<ForgotPassword />} />
			</Routes>
			<ToastContainer />
		</div>
	)
}

export default App

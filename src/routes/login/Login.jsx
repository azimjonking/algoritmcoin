import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Link, useNavigate } from 'react-router-dom'
import { Flip, toast } from 'react-toastify'
import { LoadingBtn } from '../../components/loading_btn/LoadingBtn'

import axiosInstance from '../../url/MainUrl'
import './Login.css'
const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [disable, setDisable] = useState(false)
	const [error, setError] = useState(false)
	const navigate = useNavigate()

	const params = {
		email,
		password,
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setDisable(true)
		try {
			const res = await axiosInstance.get('auth/login', {
				params: {
					params,
				},
				withCredentials: true,
			})
			if (res) {
				console.log(res.data)
				navigate('/admin')
				setError(false)
				toast.success(res?.data?.detail, {
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: true,
					progress: undefined,
					theme: 'dark',
					transition: Flip,
				})
				setEmail('')
				setPassword('')
			}
		} catch (err) {
			setError(true)
			console.error('There was an error!', err)
			toast.error('Nimadir Xato ketdi', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: true,
				progress: undefined,
				theme: 'dark',
				transition: Flip,
			})
		}
		// 	axios
		// 		.post(
		// 			`${MAIN_URL}auth/login`,
		// 			null,
		// 			{
		// 				email: email,
		// 				password: password,
		// 			},
		// 			{
		// 				withCredentials: true,
		// 			}
		// 		)
		// 		.then(res => {
		// 			setError(false)
		// 			toast.success(res?.data?.detail, {
		// 				position: 'top-right',
		// 				autoClose: 5000,
		// 				hideProgressBar: true,
		// 				progress: undefined,
		// 				theme: 'dark',
		// 				transition: Flip,
		// 			})
		// 			setEmail('')
		// 			setPassword('')
		// 			navigate('/admin')
		// 		})
		// 		.catch(err => {
		// 			setError(true)
		// 			console.error('There was an error!', err)
		// 			toast.error('Nimadir Xato ketdi', {
		// 				position: 'top-right',
		// 				autoClose: 5000,
		// 				hideProgressBar: true,
		// 				progress: undefined,
		// 				theme: 'dark',
		// 				transition: Flip,
		// 			})
		// 		})
		// 		.finally(() => {
		// 			setDisable(false)
		// 		})
	}
	return (
		<section className='login container'>
			<div className='login-header'>
				<h1 className='section-title'>
					ALGORITM <span>COIN</span>GA <br />
					XUSH KELIBSIZ!
				</h1>
				<p className='section-subtitle'>ДОБРО ПОЖАЛОВАТЬ! В АЛГОРИТМ COIN.</p>
			</div>
			<form className='login-form'>
				<div className='coin-bg'>
					<LazyLoadImage src='./assets/coin.png' alt='coin' effect='blur' />
				</div>
				<div className='login-form__header'>
					<h3 className='login-form__title'>Veb-saytga kirish</h3>
					<p className='login-form__subtitle'>
						Password yoki username xato emasligiga ishonch hosil qiling!
					</p>
				</div>
				<div className={`login-form__container ${error ? 'error_input' : ''}`}>
					<input
						type='email'
						placeholder='Email'
						value={email}
						onChange={e => {
							setEmail(e.target.value)
							setError(false)
						}}
					/>
					<input
						type='password'
						placeholder='password'
						value={password}
						onChange={e => {
							setPassword(e.target.value)
							setError(false)
						}}
					/>
					<button
						className={`btn btn_top ${
							disable ? 'disable_btn' : ' btn-primary'
						}`}
						disabled={disable}
						onClick={e => handleSubmit(e)}
					>
						{disable && <LoadingBtn />}
						Kirish
					</button>
					<p>
						Tugmani bosib, <Link to='/'>maxfiylik siyosati</Link> va{' '}
						<Link to='/'>
							foydalanuvchi <br />
							shartnomasining
						</Link>
						shartlarini qabul qilgan bo'lasiz
					</p>
				</div>
			</form>
		</section>
	)
}

export default Login

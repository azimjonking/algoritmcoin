import axios from 'axios'
import React, { useState } from 'react'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Link } from 'react-router-dom'
import { MAIN_URL } from '../../url/MainUrl'
import './Login.css'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [data, setData] = useState('')
	const [loading, setLoading] = useState(false)
	console.log(data.data.detail)
	console.log(loading)

	const params = {
		email,
		password,
	}

	const handleSubmit = e => {
		e.preventDefault()
		axios
			.post(`${MAIN_URL}auth/login`, null, { params })
			.then(res => {
				setData(res)
				console.log(res)
				setLoading(true)
			})
			.catch(err => {
				console.error('There was an error!', err)
			})
			.finally(() => {
				console.log('Request completed')
				setLoading(false)
			})
	}
	return (
		<section className='login container'>
			{/* <div className="coin-bg">
        <LazyLoadImage src="./assets/coin.png" alt="coin" effect="blur" />
      </div> */}
			<div className='login-header'>
				<h1 className='section-title'>
					ALGORITM <span>COIN</span>GA <br />
					XUSH KELIBSIZ!
				</h1>
				<p className='section-subtitle'>ДОБРО ПОЖАЛОВАТЬ! В АЛГОРИТМ COIN.</p>
			</div>
			<form className='login-form'>
				<div className='login-form__header'>
					<h3 className='login-form__title'>Veb-saytga kirish</h3>
					<p className='login-form__subtitle'>
						Password yoki username xato emasligiga ishonch hosil qiling!
					</p>
				</div>
				<div className='login-form__container'>
					<div className='coin-bg'>
						{/* <LazyLoadImage src='./assets/coin.png' alt='coin' effect='blur' /> */}
					</div>
					<input
						type='text'
						placeholder='username'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						type='password'
						placeholder='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<button
						className='btn btn-primary'
						onClick={e => handleSubmit(e)}
						disabled={loading}
					>
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

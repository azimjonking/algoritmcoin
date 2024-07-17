import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
	let data
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to='/addteacher' className='nav_btn'>
							<img src='/assets/svg_icons/add.png' alt='add teacher' />
							<span>O'qituvchi qo'shish</span>
						</Link>
					</li>
					<li>
						<Link to='/search' className='nav_btn'>
							<img src='/assets/svg_icons/search.png' alt='search' />
							<span>Qidirish</span>
						</Link>
					</li>
					<li>
						<Link to='/profile' className='username nav_btn'>
							<span>utkirgiyosov</span>
						</Link>
					</li>
					<li>
						<Link to='/profile' className='userImg'>
							{data?.data?.image ? (
								<img src={data.data.image} alt='user' />
							) : (
								<img src='./assets/user.jfif' alt='user' />
							)}
						</Link>
					</li>
					{!data?.data ? (
						<li>
							<Link to='/logout' className='nav_btn'>
								<span>Chiqish</span>
								<img src='/assets/svg_icons/logout.png' alt='logout' />
							</Link>
						</li>
					) : (
						<li>
							<Link to='/login'>
								<FaRegUser />
								<span>Kirish</span>
							</Link>
						</li>
					)}
				</ul>
			</nav>
		</>
	)
}

export default Navbar

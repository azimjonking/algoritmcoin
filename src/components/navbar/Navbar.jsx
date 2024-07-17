import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
	// const [data, setData] = useState(false)
	// const [blockBar, setBlockBar] = useState(false)
	// useEffect(() => {
	// 	fetchUserWithData(setData)
	// }, [])
	// console.log(data)
	let data
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to='/addteacher' className='nav_btn'>
							<img src='/assets/svg_icons/add.png' alt='add icon' />
							<span>O'qituvchi qo'shish</span>
						</Link>
					</li>
					<li>
						<Link to='/search' className='nav_btn'>
							<img src='/assets/svg_icons/search.png' alt='search icon' />
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
								<img src={data.data.image} alt="teacher's image" />
							) : (
								<img src='./assets/user.jfif' alt='U' />
							)}
						</Link>
					</li>
					{!data?.data ? (
						<li>
							<Link to='/logout' className='nav_btn'>
								<span>Chiqish</span>
								<img src='/assets/svg_icons/logout.png' alt='logout icon' />
							</Link>
						</li>
					) : (
						<li>
							<Link to='/login'>
								<a className='btn btn_login'>
									<FaRegUser />
									<span>Kirish</span>
								</a>
							</Link>
						</li>
					)}
				</ul>
			</nav>
		</>
	)
}

export default Navbar

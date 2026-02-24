import { Link } from 'react-router'
import './NavBar.css'

export const NavBar = () => {
	return (
		<>
			<header className="header">

				<div className="announcement">
					Free shipping on orders over $150
				</div>

				<div className="topbar container">
					<div className="logo">
						<a href="#">AURA//EDIT</a>
					</div>

					<div className="icons">
						<a href="#" className="icon">Search</a>
						<a href="#" className="icon">Account</a>
						<a href="#" className="icon cart">Cart (0)</a>
					</div>
				</div>

				<nav className="navbar">
					<div className="container nav-links">
						<Link to='/home'>Home</Link>
						<Link to='/makeProduct'>Make Product</Link>
					</div>
				</nav>

			</header>
			<nav className='nav-bar'>
				<ul>
					<li>
						<Link to='/home'>Home</Link>
					</li>
					<li>
						<Link to='/makeProduct'>Make Product</Link>
					</li>
					<li></li>
				</ul>
			</nav>

		</>
	)
}


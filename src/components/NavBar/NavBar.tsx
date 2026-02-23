import { Link } from 'react-router'
import './NavBar.css'

export const NavBar = () => {
	return (
		<>
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


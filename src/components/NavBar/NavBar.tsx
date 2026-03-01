import { Link } from 'react-router'
import './NavBar.css'
import type { Category } from '../../productTypes'
import { useEffect, useState } from 'react'
import { getCategoryAPIBaseURL } from '../../appdata'
import { useNavigate } from 'react-router'

export const NavBar = () => {
	const [categories, setCategories] = useState<Array<Category>>([]);
	const navigate = useNavigate();
	useEffect(() => {
		async function loadData() {
			const response = await fetch(`${getCategoryAPIBaseURL()}`);
			const data: Array<Category> = await response.json();
			setCategories(data);
		}
		loadData();
	}, [])
	return (
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
					{categories.map(category =>
						<Link to={`/products/${category.categoryId}`} > {category.title}</Link>)}
					<Link to='/home'>Home</Link>
					<Link to='/makeProduct'>Make Product</Link>
				</div>
			</nav>
		</header >

	)
}


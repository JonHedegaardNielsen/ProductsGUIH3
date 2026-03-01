import { useEffect, useState } from 'react'
import './Footer.css'
import type { Category } from '../../productTypes'
import { getCategoryAPIBaseURL } from '../../appdata'
export const Footer = () => {
	return (
		<footer className="footer">
			<div className="container footer-top">

				<div className="footer-col">
					<h3 className="footer-logo">AURA//EDIT</h3>
					<p className="footer-tagline">
						Refined essentials for modern wardrobes.
						Timeless silhouettes. Elevated everyday wear.
					</p>
				</div>

				<div className="footer-col">
					<h4>Customer Service</h4>
					<ul>
						<li><a href="#">FAQ</a></li>
						<li><a href="#">Delivery</a></li>
						<li><a href="#">Returns</a></li>
						<li><a href="#">Contact Us</a></li>
					</ul>
				</div>

				<div className="footer-col">
					<h4>About Aura</h4>
					<ul>
						<li><a href="#">Our Story</a></li>
						<li><a href="#">Sustainability</a></li>
						<li><a href="#">Careers</a></li>
						<li><a href="#">Stores</a></li>
					</ul>
				</div>

				<div className="footer-col newsletter">
					<h4>Stay in the Aura.</h4>
					<p>Join our newsletter and get 15% off your first order.</p>
					<form>
						<input type="email" placeholder="Your email" />
						<button type="submit">Subscribe</button>
					</form>
				</div>

			</div>

			<div className="footer-bottom">
				<p>© 2026 AURA//EDIT. All rights reserved.</p>
				<div className="socials">
					<a href="#">Instagram</a>
					<a href="#">Pinterest</a>
					<a href="#">Facebook</a>
				</div>
			</div>
		</footer>
	)
}


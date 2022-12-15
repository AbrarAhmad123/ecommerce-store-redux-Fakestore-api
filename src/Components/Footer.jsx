import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="footer-distributed">

			<div className="footer-right">

				<a href="#"><i className="fa fa-facebook"></i></a>
				<a href="#"><i className="fa fa-twitter"></i></a>
				<a href="#"><i className="fa fa-linkedin"></i></a>
				<a href="#"><i className="fa fa-github"></i></a>

			</div>

			<div className="footer-left">

				<p className="footer-links ">
					<NavLink to="/">Home</NavLink>

					<NavLink to="/products">Product</NavLink>

					<NavLink to="/about">About</NavLink>

					<NavLink to="/contact">Contact</NavLink>
				</p>
				<p>Deux Amicci &copy; 2022</p>
			</div>

		</footer>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
    const state = useSelector((state) => state.cart.cart)

    const { loginWithRedirect, logout,  isAuthenticated, user } = useAuth0();

    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light py-3">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">Deux Amicci Store</NavLink>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active fw-bold" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        {isAuthenticated && <span className=' ms-2'>
                                Welcome {user.nickname}</span>}
                        <div className="buttons bs-data">
                            {isAuthenticated ? <button className='btn btn-outline-dark ms-2' onClick={() => logout({ returnTo: window.location.origin })}>
                               <i className='fa fa-sign-in me-2'></i> Log Out
                            </button> : <button className='btn btn-outline-dark ms-2' onClick={() => loginWithRedirect()}>
                                <i className='fa fa-sign-in me-2 '></i>  Log In</button> } 
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2 ">
                                <i className="fa fa-shopping-cart me-2"></i> Cart({state?.length})</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

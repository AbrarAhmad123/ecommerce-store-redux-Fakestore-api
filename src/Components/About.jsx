import React from 'react'
import { NavLink } from 'react-router-dom'
import { Footer } from './Footer'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                        <p className="lead "> DEUX AMICCI is a Handmade Leather Shoe Brand in Pakistan, established in 2021. Our aim is to provide the luxury footwear to our respected customers which undoubtedly impact their physical appearance and will be one of the best addition to their wardrobe. Research shows people are unaware of quality leather. So we are trying to provide our customers with quality leather shoes as well as creating awareness regarding their concerns.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary">Contact Us </NavLink>
                    </div>
                    <div className='col-md-6'> <img src='/assets/bg1.jpg' alt='About' height="500px" width="500px" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default About

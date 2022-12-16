import React from 'react'
import { Footer } from './Footer'
import Product from './Product'

export default function Home() {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="Background" height='700px' />
                <div className="card-img-overlay d-flex flex-column
                 justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">Winter Season Is Here</h5>
                        <p className="card-text lead fs-2">Check Out All the Trends</p>
                    </div>
                </div>
            </div>
            <Product/>
            <Footer/>
        </div>

    )
}

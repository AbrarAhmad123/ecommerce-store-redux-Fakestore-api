import React from 'react'
import { Footer } from './Footer'



const Contact = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 py-1 my-3"></div>
                    <h1 className="text-center">Have Some Questions</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src='/assets/bg2.jpg' alt='About us' height="400px" width="500px" />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="Abrar Ahmad"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3">
                                <label for="phoneNumber" class="form-label">Phone Number</label>
                                <input type="email" class="form-control" id="phoneNumber" placeholder="03**-*******"/>
                            </div>
                            
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        

    )
}

export default Contact

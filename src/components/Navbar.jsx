import React from 'react'
import logo from '../assets/Icon.png'
import contactLogo from '../assets/fi-rr-phone-call.png'
import './style.css'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <h3>
                        <a class="navbar-brand" href="#">
                           
                           <span className='F px-2'>F</span> 
                            OODI
                        </a> </h3>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item mx-4">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item me-4">
                                <a class="nav-link" aria-current="page" href="#">Menu</a>
                            </li>
                            <li class="nav-item me-4">
                                <a class="nav-link" aria-current="page" href="#">Services</a>
                            </li>
                            <li class="nav-item me-4">
                                <a class="nav-link" aria-current="page" href="#">Offers</a>
                            </li>

                        </ul>

                        <button type="button" class="btn btn-success regBtn px-3">
                            <img src={contactLogo} alt="contact Logo" className='w-25' />
                            <span className='ms-2'>Contact</span></button>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
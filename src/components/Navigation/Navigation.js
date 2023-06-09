import React from 'react'
import Logo from '../../assets/logo.png'
import './navigation.css'

function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav-area">
        <div className="container-fluid">
            <a className="navbar-brand" href="https://dapper-syrniki-79881d.netlify.app/">
            <img src={Logo} alt="brand logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active home-link" aria-current="page" href="https://dapper-syrniki-79881d.netlify.app/"> Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disable other-link" href="https://dapper-syrniki-79881d.netlify.app/">Find a Doctor</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disable other-link" href="https://dapper-syrniki-79881d.netlify.app/">App</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disable other-link" href="https://dapper-syrniki-79881d.netlify.app/">Testimonials</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disable other-link" href="https://dapper-syrniki-79881d.netlify.app/">About Us</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navigation

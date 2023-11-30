import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="row">
                    <li><a href='a'>Home</a></li>
                    <li><a href='a'>About</a></li>
                    <li><a href='a'>Privecy Policy</a></li>
                </div>
                <div className="row">
                    <li><a href='a'>Technology</a></li>
                    <li><a href='a'>Spiritual & Life</a></li>
                    <li><a href='a'>support</a></li>
                </div>
                <div className="row">
                    <li><a href='a'>Contact</a></li>
                    <li><a href='a'>Accessibility Statement</a></li>
                    <li><a href='a'>carrear</a></li>
                </div>
            </div>
            <div className="cpywrt-section">
                <p>@myblog, 2023</p>
            </div>
        </div>
    )
}

export default Footer

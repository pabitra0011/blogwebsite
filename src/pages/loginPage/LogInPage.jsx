import React from 'react'
import './LogInPage.css'

import img1 from '../../assetes/LoginImg.webp'
import { Link } from 'react-router-dom'

const LogInPage = () => {
    return (
        <div className='loginPage'>
            <div className="loginPage-container">
                <h1>LogIn</h1>
                <form className='login-form'>
                    <label>Email</label>
                    <input type='email' placeholder='Enter Your Email' />
                    <label>Password</label>
                    <input type='text' placeholder='Enter Password' />
                    <button className='logIn-btn'>Login</button>
                    <button className='signUp-btn'>
                        <Link to='/signup'>Register</Link>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LogInPage

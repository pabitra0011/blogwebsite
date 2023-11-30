import React from 'react'
import './SignInPage.css'
import { Link } from 'react-router-dom'


const SignInPage = () => {
    return (
        <div className='signIn-page'>
            <div className="signIn-container">
                <h1>Sign Up</h1>
                <form className='signUp-form'>
                    <label>Name</label>
                    <input type='text' placeholder='Enter Your Name' />
                    <label>Email</label>
                    <input type='email' placeholder='Enter Your Email' />
                    <label>Password</label>
                    <input type='text' placeholder='***********' />
                    <button className='signUp-btn'>Regester</button>
                    <button className='logIn-btn'>
                        <Link to='/login' >Login</Link>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignInPage

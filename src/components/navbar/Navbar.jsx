import React from 'react'
import './Navbar.css'
import { FaSistrix } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import ProfileIcon from '../../assetes/profileimg.jpeg'
import { Link } from 'react-router-dom';


const Navbar = ({ user }) => {
  // const user = false;

  return (
    <div className='nav'>
      <div className='logo'>
        <FaFacebook className=' fb icon' />
        <FaInstagram className='insta icon' />
        <FaPinterest className='pint icon' />
        <FaTwitter className='tw icon' />
      </div>
      <div className='nav-menu'>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li><a href='abc'>About</a></li>
          <li>
            <Link to='write'>Write</Link>
          </li>
          <li><a href='abc'>Contact</a></li>
          {/* <li><a href='abc'>Logout</a></li> */}
        </ul>
      </div>
      {user
        ?
        <div className='search-section'>
          <img src={ProfileIcon} alt='hi' />
          <FaSistrix className='nav-icon' />
        </div>
        :
        <div className='nav-menu-login'>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>SignUp</Link>
            </li>
          </ul>
        </div>}

    </div>
  )
}

export default Navbar

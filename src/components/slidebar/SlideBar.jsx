import React from 'react'
import './SlideBar.css'

import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import img1 from '../../assetes/personImg.jpg'

const SlideBar = () => {
  return (

    <div className='sidebar'>
      <div className="sideBar-item">

        <h3 className='heading'>ABOUT ME</h3>

        <div className="img">
          <img src={img1} alt='a' />
        </div>
        <p className='about-txt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem quasi, similique ipsum minus vel tempore ipsa corporis veritatis perspiciatis nisi?</p>

        <h3 className='heading'>Categories</h3>

        <div className="categories-items">
          <p>Life</p>
          <p>Spritual</p>
        </div>
        <div className="categories-items">
          <p>Life</p>
          <p>Spritual</p>
        </div>

        <h3 className='heading'>Follow Us</h3>

        <div className="social-container">
          <FaFacebook className=' fb icon' />
          <FaInstagram className='insta icon' />
          <FaPinterest className='pint icon' />
          <FaTwitter className='tw icon' />
        </div>
      </div>
    </div>
  )
}

export default SlideBar

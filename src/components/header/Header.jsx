import React from 'react'
import './Header.css'

import HeaderImg from '../../assetes/header img.jpg'


const Header = () => {
  return (
    <div className='header'>
      <div className='titles'>
        <h3>Blog App</h3>
        <h1>Blog</h1>
      </div>
      <img src={HeaderImg} alt='hed' />
    </div>
  )
}

export default Header


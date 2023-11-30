import React from 'react'
import './Posts.css'

import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import Post from '../postItem/Post';
import { Link } from 'react-router-dom';

import Data from '../../data/data'

const Posts = () => {
  return (

    <div className='posts'>
      {
        Data.map((Dataitem, index) =>
          <>
            <Link to='/single/12'> <Post data={Dataitem} i={index} />
            </Link>
          </>
        )
      }
    </div>
  )
}

export default Posts

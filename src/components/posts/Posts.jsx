import React from 'react'
import './Posts.css'

import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import Post from '../postItem/Post';
import { Link } from 'react-router-dom';

import Data from '../../data/data'

// console.log(Data)

const Posts = () => {
  return (
    <>
      <div className='posts'>

        {
          Data.map((Dataitem, index) =>
            // <div key={index}>
            <Post key={index} data={Dataitem} i={index} />
            // </div>
          )
        }
      </div>
    </>
  )
}

export default Posts

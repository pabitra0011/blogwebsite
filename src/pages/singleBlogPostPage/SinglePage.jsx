import React from 'react'
import './SinglePage.css'
import SlideBar from '../../components/slidebar/SlideBar'
import SinglePost from '../../components/singlePost/SinglePost.'

const SinglePage = () => {
    return (
        <div className='singlePage'>
            <SinglePost />
            <SlideBar />
        </div>
    )
}

export default SinglePage

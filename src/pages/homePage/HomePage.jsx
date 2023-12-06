import React from 'react'
import './HomePage.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SlideBar from '../../components/slidebar/SlideBar'



const HomePage = () => {
    console.log("I am Here");


    return (
        <>
            {/* <Header /> */}
            <div className='home'>
                <Posts />
                <SlideBar />
            </div>
        </>
    )
}

export default HomePage

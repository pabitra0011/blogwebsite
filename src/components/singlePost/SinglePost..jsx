import React from 'react'
import './SinglePost.css'
import { useParams, useLocation } from 'react-router-dom';

import data from '../../data/data'

const SinglePost = () => {

    const { i } = useParams();
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const postDataparam = params.get('blogItem');
    const postData = JSON.parse(decodeURIComponent(postDataparam));
    console.log(postData)
    // const postData = {
    //     title: params.get('title'),
    //     img: params.get('img'),
    //     author: params.get('author'),
    //     date: params.get('date'),
    //     time: params.get('time'),
    //     content1: params.get('content1'),
    //     content2: params.get('content2')
    // };


    return (
        <div className='singlePost'>
            <div className="singlePost-img">
                <img src={postData.img} alt='a' />
            </div>
            <div className="singlePost-title">
                <h2>{postData.title}</h2>
            </div>
            <div className="singlePost-about">
                <p>{postData.author} </p>
                <p>{postData.time}</p>
                <p>{postData.date}</p>
            </div>
            <div className="singlePost-text">
                <p>{postData.content1}</p>
                <p>{postData.content2}</p>
            </div>
        </div>
    )
}

export default SinglePost

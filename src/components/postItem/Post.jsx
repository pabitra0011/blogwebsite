import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Post = ({ data, i }) => {
    const { title, img, author, date, time, content1, content2, tags } = data;

    return (
        <Link to={`/single/${i}?title=${encodeURIComponent(title)}&img=${encodeURIComponent(img)}&author=${encodeURIComponent(author)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(time)}&content1=${encodeURIComponent(content1)}&content2=${encodeURIComponent(content2)}`}>
            <div className='post-item'>
                <div className="post-img">
                    <img alt='s' src={img} />
                </div>
                <div className="post-title">
                    <h1>{title}</h1>
                </div>
                <div className="post-about">
                    <p>{author}</p>
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
                <div className="post-text">
                    <p>{content1}</p>
                </div>
                <div className="post-tag">
                    {
                        tags.map((item, i) =>
                            <button>{item}</button>
                        )
                    }
                </div>
            </div>
        </Link >
    )
}

export default Post

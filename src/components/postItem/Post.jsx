import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useCityContext } from '../../Usercontext';

const Post = ({ data, i }) => {
    // const { title, img, author, date, time, content1, content2, tags } = data;

    const { mainCity } = useCityContext();



    return (
        // <Link to={`/single/${i}?title=${encodeURIComponent(data.title)}&img=${encodeURIComponent(data.img)}&author=${encodeURIComponent(data.author)}&date=${encodeURIComponent(data.date)}&time=${encodeURIComponent(data.time)}&content1=${encodeURIComponent(data.content1)}&content2=${encodeURIComponent(data.content2)}`}>
        <Link to={{
            key: { i },
            pathname: `/single/${data.id}`,
            search: `?blogItem=${encodeURIComponent(JSON.stringify(data))}`
        }}>
            <div className='post-item'>
                <div className="post-img">
                    <img alt='s' src={data.img} />
                </div>
                <div className="post-title">
                    <h1>{data.title}</h1>
                </div>
                <div className="post-about">
                    <p>{data.author}</p>
                    <p>{data.date}</p>
                    <p>{data.time}</p>
                </div>
                <div className="post-text">
                    <p>{data.content1}</p>
                </div>
                <div className="post-tag">
                    {
                        data.tags.map((item, i) =>
                            <button>{item}</button>
                        )
                    }
                </div>

                <div className="city">
                    <h4>{mainCity}</h4>
                </div>

            </div>
        </Link >
    )
}

export default Post

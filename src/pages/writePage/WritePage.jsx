import React from 'react'
import './Write.css'

import { CiCirclePlus } from "react-icons/ci";

const WritePage = () => {
    return (
        <div className='write-page'>
            <img className='writepage-img' alt='a' src='https://th.bing.com/th/id/R.d991ba99b75f78ccdfdc0834b309816c?rik=kG04MN2Fyr2RRQ&riu=http%3a%2f%2fmedia.bizj.us%2fview%2fimg%2f8002122%2fhowtodigitalcommunications*1200xx2651-1496-0-85.jpg&ehk=7Nke0%2fXVWLhQcHhxj9QGyM9%2f%2fjLvKcOymxc3cHqRffk%3d&risl=&pid=ImgRaw&r=0' />
            <form className="write-form">
                <div className="writeForm-container">
                    <label htmlFor='fileInput'>
                        <CiCirclePlus className='write-icon' />
                    </label>
                    <input type='file' id='fileInput' style={{ display: 'none' }} />
                    <input type='text' placeholder='Title Here..' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeForm-container">
                    <textarea type='text' placeholder='Write your Story Here.....' className='writeTextarea'></textarea>
                    <button className='writeSubmit'>Publish</button>
                </div>
            </form>
        </div>
    )
}

export default WritePage

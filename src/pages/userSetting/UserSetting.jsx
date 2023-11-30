import React from 'react'
import './UserSetting.css'
import { FiEdit } from "react-icons/fi";
import SlideBar from '../../components/slidebar/SlideBar'

const UserSetting = () => {
    return (
        <div className='user-setting'>
            <div className="userSetting-section">
                <div className="userSetting-heading">
                    <h1>Update Your Account</h1>
                    <div className="deleteBtn">
                        <button>Delete Account</button>
                    </div>
                </div>
                <form className='userSetting-form'>
                    <label>Profile Picture</label>
                    <div className="profilePic-img">
                        <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' alt='a' />
                        <label htmlFor='fileInput'> <FiEdit className='icon' /> </label>
                        <input type='file' id='fileInput' style={{ display: 'none' }} />
                    </div>
                    <label>Name</label>
                    <input type='text' placeholder='Jhon Doe' />
                    <label>Email</label>
                    <input type='email' placeholder='abc@gmail.com' />
                    <label>Password</label>
                    <input type='text' placeholder='******' />

                    <button className='userSetting-update'>Update</button>
                </form>
            </div>

            {/* <SlideBar /> */}
        </div>
    )
}

export default UserSetting

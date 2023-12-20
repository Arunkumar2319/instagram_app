import axios from 'axios';
import { useEffect, useState } from 'react';

import './Stories.css';
import userImage from '../../images/user_image.jpg';
import useFetch from '../../custom-hooks/posts-hook';


const Stories = () => {
    let storyList  = []
    storyList = useFetch(process.env.REACT_APP_API_URL + 'users')

    return (
        <>
            <div className='d-flex'>
                {/* <div className='my-story-container'>
                    <img className='my-story' src={userImage} alt='user' />
                    <span className='add-story-icon'>+</span>
                </div> */}
                {storyList?.map((element, index) => (
                        <div className="story m-3" key={index}>
                            <div className='story-border-container'>
                                <img className='story-user-image' src={element.userImageURL} alt='user' />
                            </div>
                            <div className='d-flex justify-content-center'>
                                <p>user</p>
                            </div>
                        </div>
                ))}
            </div>
        </>
    )
}

export default Stories;
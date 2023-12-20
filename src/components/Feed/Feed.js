import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import './Feed.css';

import heart from '../../images/heart-red.svg';
import heartOutlined from '../../images/heart-outilned.svg';
import comment from '../../images/comment.svg';
import saveIconOutline from '../../images/save-outlined.svg';
import saveIconColored from '../../images/save.svg';
import user_image from '../../images/user_image.jpg';
import Stories from '../Stories/Stories';
import { setFavouritePosts, setPostsList } from '../../reducers/postSlice';
import AppLoader from '../../loader/round-loader';
import { setSavedPosts } from '../../reducers/savedPosts';

const Feed = (props) => {
    const [searchTerm, setSearchTerm] = useState('nature');
    const [imageList, setImage] = useState([])
    const [likedPhotoIds, setLikedPhotoIds] = useState([]);
    const [savedPostsIds, setSavedPostIds] = useState([]);

    const dispatch = useDispatch();

    const apiUrl = process.env.REACT_APP_API_URL + searchTerm;

    useEffect(() => {
        let modifiedData = []
        axios.get(apiUrl).then((response) => {
            response.data.hits.forEach(element => {
                let modifiedResponse = { ...element, "isFavourite": false }
                if (modifiedData != null) {
                    modifiedData.push(modifiedResponse)
                }
            });
            setImage(modifiedData)
            dispatch(setPostsList(modifiedData))
        })
    }, [searchTerm])

    const addImageToFavourite = (likedPhoto) => {
        setLikedPhotoIds((prevIds) => [...prevIds, likedPhotoIds.id])
        if (likedPhotoIds != null) {
            likedPhotoIds.push(likedPhoto.id)
        }
    }

    const savePosts = (postData) => {
        dispatch(setSavedPosts(postData));
        setSavedPostIds((savedPrevIds) => [...savedPrevIds,])
        if (savedPostsIds != null) {
            savedPostsIds.push(postData.id)
        }
    }
    return (
        <>
            <div className='m-4'>
                <h5 className='header-align'><b>Stories</b></h5>
                <div className='story-container'>
                    <Suspense fallback={<AppLoader />} >
                        <Stories />
                    </Suspense>
                </div>
            </div>
            <div className='m-4'>
                <h5 className='header-align'><b>Posts</b></h5>
            </div>
            <Suspense fallback={<AppLoader />} >
                <div className='img-container'>
                    {imageList?.map((element, index) => (
                        <div className='m-2' key={index}>
                            {/* <p className='profile-name'>Venice Rome</p> */}
                            <div className='d-flex post-header'>
                                <img className='post_profile_img' src={user_image} alt='user' />
                                <h5 className='profile-name' >Lorentz</h5>
                            </div>
                            <img className='d-block image' src={element.previewURL} alt={`img${index}`} />
                            <div className='d-flex'>
                                {likedPhotoIds?.includes(element.id) ?
                                    <img className='user-post' src={heart} alt="Avatar"></img>
                                    : <img className='user-post' src={heartOutlined} alt="Avatar" onClick={() => addImageToFavourite(element)}></img>
                                }
                                <img className='comment' src={comment} alt="comment"></img>
                                {savedPostsIds?.includes(element.id) ?
                                    <img className='saveIcon' src={saveIconColored} alt="saved"></img>
                                    : <img className='saveIcon' src={saveIconOutline} alt="saved" onClick={(() => savePosts(element))}></img>
                                }
                                {/* <span className='heart'></span> */}
                            </div>
                        </div>
                    ))}
                </div>
            </Suspense>
        </>
    )
}

export default Feed;
import { useSelector } from 'react-redux';

import './Saved_posts.css';

const SavedPosts = () => {

    const savedPosts = useSelector((store) => store.savedPosts.savedPosts);
    return(
        <div className="main-content">
            <div className='image-container'>
            {savedPosts?.map((element, index) => (
                <div className='mb-4'>
                    <img className='d-block saved-posts' src={element.previewURL} alt={`img${index}`} />
                </div>
            ))}
            </div>
        </div>
    )
}

export default SavedPosts;
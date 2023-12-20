import Feed from '../Feed/Feed';
import './Home.css';
import user_image from '../../images/user_image.jpg';

const Home = () => {
    return (
        <div className='main-content'>
            <div className='d-flex '>
                <div className='feed'>
                    <Feed />
                </div>
                {/* <Routes>
                        <Route path='/saved' element={<SavedPosts />} />
                    </Routes> */}
                <div className='suggestions'>
                    <h5 className='header-align'>Suggestions for you </h5>
                    <div className='suggestion-card m-3'>
                        <div className='d-flex'>
                            <img className='suggestions_profile_img' src={user_image} alt='user' />
                            <span className='suggestions-user-name'><b>R.A.M_rm</b></span>
                            <button className='btn btn-primary follow-btn'>Follow</button>
                            <button className='btn btn-secondary view-btn'>View</button>
                        </div>
                    </div>
                    <div className='suggestion-card m-3'>
                        <div className='d-flex'>
                            <img className='suggestions_profile_img' src={user_image} alt='user' />
                            <span className='suggestions-user-name'><b>_loyola.Ru</b></span>
                            <button className='btn btn-primary follow-btn'>Follow</button>
                            <button className='btn btn-secondary view-btn'>View</button>
                        </div>
                    </div>
                    <div className='suggestion-card m-3'>
                        <div className='d-flex'>
                            <img className='suggestions_profile_img' src={user_image} alt='user' />
                            <span className='suggestions-user-name'><b>bhosley__</b></span>
                            <button className='btn btn-primary follow-btn'>Follow</button>
                            <button className='btn btn-secondary view-btn'>View</button>
                        </div>
                    </div>
                    <div className='all-results'>
                        <span>See all</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
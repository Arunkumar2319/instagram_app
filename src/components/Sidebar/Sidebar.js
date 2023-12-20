import './Sidebar.css';
import app_logo from '../../images/app_logo.png';
import user_image from '../../images/user_image.jpg';
import feed from '../../images/feed.svg';
import explore from '../../images/explore.svg';
import direct from '../../images/feed.svg';
import message from '../../images/message.svg';
import settings from '../../images/settings.svg';
import logout from '../../images/logout.svg';
import saveIconOutline from '../../images/save-outlined.svg';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        // <div className='main-positioner'>
        //     <div className='header'>
        //         <h5 className='header'>Instagram</h5>
        //         <img className='app-logo' src={app_logo} alt='logo' />
        //     </div>
        //     <div className='user-card'>
        //         <img className='user-image' src={user_image} alt='user' />
        //         <p className='user-name'>Cipher</p>
        //     </div>

        //     <div className='flex-container'>
        //         <div className='user-data-container'><span><b>120</b><br />Posts</span></div>
        //         <div className='user-data-container'><span><b>12.7K</b><br />Followers</span></div>
        //         <div className='user-data-container'><span><b>1.2K</b><br />Following</span></div>
        //     </div>
        // </div>
        <div id="mySidenav" class="sidenav">
            <div className='header'>
                <img className='app-logo' src={app_logo} alt='logo' />
            </div>
            <div className='user-card'>
                <img className='user-image' src={user_image} alt='user' />
                <p className='user-name'>Cipher</p>
            </div>

            <div className='flex-container'>
                <div className='user-data-container'><span><b>120</b><br />Posts</span></div>
                <div className='user-data-container'><span><b>12.7K</b><br />Followers</span></div>
                <div className='user-data-container'><span><b>1.2K</b><br />Following</span></div>
            </div>
            <div className='first-item'>
                <NavLink to='/'><img className='icon' src={feed} alt='feed' />Feed</NavLink>
                {/* <a href="#"><img className='icon' src={feed} alt='feed' />Feed</a> */}
                <a href="#"><img className='icon' src={explore} alt='explore' />Explore</a>
                <a href="#"><img className='icon' src={message} alt='message' />Messages</a>
                <a href="#"><img className='icon' src={direct} alt='direct' />Direct</a>
                <a href="#"><img className='icon' src={settings} alt='settings' />Settings</a>
                <NavLink to="/saved"><img className='icon' src={saveIconOutline} alt='saved' />Saved</NavLink>
                {/* <a href="#"><img className='icon' src={saveIconOutline} alt='saved' />Saved</a> */}
                <a href="#"><img className='icon' src={logout} alt='logout' />Logout</a>
            </div>
        </div>
    )
}

export default Sidebar;
import './Navbar.css';
import message from '../../images/message.svg';
import notification from '../../images/notification.svg';

const Navbar = (props) => {
    const setSearchTerm = (searchValue) => {
        props.setSearchTerm(searchValue)
    }
    return (
        <>
            <div className='searchbar m-3'>
                <input className='search' placeholder='Search....' onChange={(event) => setSearchTerm(event.target.value)}/>
            </div>
            <div className='navbar'>
                <div className='navbar-items d-flex'>
                    <img className='icon' src={message} alt='message'/>
                    <img className='icon' src={notification} alt='message'/>
                    <button class='add-photo'>Add Photo</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;
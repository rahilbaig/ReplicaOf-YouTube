import logo from '../images/logo.png'
import mic from '../images/mic.png'
import bell from '../images/bell.png'
import prf from '../images/mine.jpg'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return ( 
        <div className="lkb">
            <div className="nav">
            <div className="logo">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="inp">
                <div className='an'>
                <input type="text" placeholder='search' />
                <button>search</button>
                </div>
                <img src={mic} alt="" />
            </div>
            <div className="profile">
                <Link to="/about">about</Link>
                <Link to="/addvideo">addvideo</Link>
                <Link to=""><img src={bell} alt="" /></Link>
                <Link to=""><img src={prf}  alt="" /></Link>
            </div>
        </div>
        </div>
     );
}
 
export default Navbar;
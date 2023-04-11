import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import '../styles/pagenotfound.css'
const Pagenotfound = () => {
    return (
        <div className="pagenotfound">
            <img src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png" alt="" />
            <p>This page isn't available. Sorry about that. <br />
                Try searching for something else.</p>
                <img height="80px" width="160px" src={logo} alt="" /><br />
                <a href="/"> Go Back To Home </a>
        </div>
    );
}

export default Pagenotfound;
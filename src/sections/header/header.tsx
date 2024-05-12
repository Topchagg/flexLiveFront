import { Link } from 'react-router-dom'

import './ui/header.css'

const Header = () => {
    return (
        <header className="header">
           <div className="content-wrapper">
                <div className="header-content-wrapper">
                    <div className="logo-wrapper">
                        <Link to={"/"}><img className='img' src="./icons/logo.png" alt="" /></Link>
                    </div>
                    <div className="nav-menu-wrapper">
                        <Link to={"/gallery"}><div className="nav-item main-text">Gallery</div></Link>
                        <Link to={"/services"}><div className="nav-item main-text">Price for services</div></Link>
                        <Link to={"/about-us"}><div className="nav-item main-text">About us</div></Link>
                        <Link to={"/contact"}><div className="nav-item main-text">Contact</div></Link>
                    </div>
                </div>
           </div>
        </header>
    )
}

export default Header
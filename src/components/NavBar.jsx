import './NavBar.css'
import FlowerToggle from "./FlowerToggle"
import HLine from './HLine';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function NavBar() {
    return (
        <>
            <div className="navbar-container" >
                <h1 className="main-font text-2xl" >Leah Made This</h1>
                <FlowerToggle />
                <div className="flex-column flex-center">
                    <a href="#" className="secondary-font" >work</a>
                    <a href="#" className="secondary-font" >play</a>
                    <a href="#" className="secondary-font" >about</a>
                </div>
                <HLine offset="20px" marginY="20px" />
                <HLine offset="20px" marginY="20px" />
                <div>
                    <FontAwesomeIcon icon={faEnvelope} size="xl" className="nav-icon" />
                    <FontAwesomeIcon icon={faLinkedin} size="xl" className="nav-icon" />
                </div>
                <p className="main-font text-xs">© 2026  Leah Made This.  All Rights Reserved</p>
            </div>

            
        </>
        
)
}

import './NavBar.css'
import FlowerToggle from "./FlowerToggle"
import HLine from './HLine';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function NavBar() {
    return (
        <>
            <div className="navbar-container" >
                <div className="nav-section flex-column flex-center">
                    <h1 className="logo main-font text-2xl" href="#">Leah Made This</h1>
                    <FlowerToggle />
                    <div className="nav-links flex-column flex-center">
                        <a href="#" className="secondary-font" >work</a>
                        <a href="#" className="secondary-font" >play</a>
                        <a href="#" className="secondary-font" >about</a>
                    </div>
                    <HLine offset="20px" marginY="20px" />
                </div>

                <div style={{ flexGrow: 1 }}></div>
            
                <HLine offset="20px" marginY="20px" />

                <div className="nav-section flex-column flex-center">
                    <div className="social-icons">
                        <a href="mailto:leahmadethis4@gmail.com" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} size="xl" className="nav-icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/leahcoelho/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="xl" className="nav-icon" />
                        </a>
                        <a href="https://github.com/lcoelho142/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="xl" className="nav-icon" />
                        </a>
                    </div>
                    <p className="main-font text-xs font-light">© 2026<br/>Leah Made This.<br/>All Rights Reserved</p>
                </div>
            </div>

            
        </>
        
);
}

import { Link } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';

import './NavBar.css';
import FlowerToggle from "../common/FlowerToggle"
import HLine from '../common/HLine';
import VLine from '../common/VLine';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import '../../pages/home/HomeSidebar.css';
import Frog from '../../assets/frog.svg';

export default function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === "/";

    const handleBack = () => {
        navigate(-1);
    };

    const backLabel = "back";

    return (
        <>
            <div className="navbar-container" >
                <div className="nav-top-section">
                    <Link to="/" className="logo main-font text-2xl">Leah Made This</Link>

                    <VLine className="nav-vline" />
                    <div className="flower-toggle-wrapper">
                        <FlowerToggle />
                    </div>
                    <div className="nav-links flex-column flex-center">
                        <Link to="/work" className="secondary-font">work</Link>
                        <Link to="/play" className="secondary-font" >play</Link>
                        <Link to="/about" className="secondary-font" >about</Link>
                    </div>
                    <HLine className="nav-divider" offset="20px" marginY="20px" />
                </div>

                {!isHomePage && (
                <div className="back-button-container" onClick={handleBack} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faArrowLeft} className="back-arrow-icon accent-color" />
                    <p className="back-text secondary-font accent-color">{backLabel}</p>
                </div>
                )}

                <div className="nav-spacer" style={{ flexGrow: 1 }}></div>
            
                <HLine className="nav-divider" offset="20px" marginY="20px" />

                <div className="nav-bottom-section">
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
                    <div>
                        <a className="frog-nav" href="https://weather-app-mauve-three-68.vercel.app/" target="_blank" rel="noreferrer" ><img src={Frog} alt="Frog Logo" /></a>

                    </div>
                    <p className="main-font text-xs font-light">© 2026<br/>Leah Made This.<br/>All Rights Reserved</p>
                </div>
            </div>

            
        </>
        
);
}

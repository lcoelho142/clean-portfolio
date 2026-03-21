import React, { useState } from 'react';
import './SideBar.css'
import LiveWeather from './LiveWeather'
import Frog from '../assets/frog.svg'
import SunFrog from '../assets/sun-frog.svg'
import OrangeSunFrog from '../assets/sun-frog-orange.svg'

export default function SideBar() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <aside className="side-nav-container">
        <div className="side-nav-right">
                {/* Currently Section w/ App Icon */}
                <a href="https://weather-app-mauve-three-68.vercel.app/" target="_blank" rel="noreferrer" className="status-link"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="frog-wrapper">
                        <img src={Frog} alt="Weather App" className="mini-icon base-frog" />

                        <img src={OrangeSunFrog} alt="Sunny Weather App" 
                            className={`mini-icon sun-frog light-only ${isHovered ? 'visible' : ''}`} 
    />
                        <img src={SunFrog} alt="Sunny Weather App" className={`mini-icon sun-frog dark-only ${isHovered ? 'visible' : ''}`} />
                    </div>
                    <LiveWeather />
                </a>
        </div>
        </aside>
    )
}
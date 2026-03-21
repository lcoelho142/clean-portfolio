import React, { useState } from 'react';
import './SideBar.css'
import LiveWeather from './LiveWeather'
import Frog from '../assets/frog.svg'
import SunFrog from '../assets/sun-frog.svg'

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
                    <img src={isHovered ? SunFrog : Frog} alt="Weather App" className="mini-icon" />
                    <LiveWeather />
                </a>
        </div>
        </aside>
    )
}
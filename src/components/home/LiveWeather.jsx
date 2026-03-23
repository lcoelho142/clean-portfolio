import React, { useState, useEffect } from 'react';

const LiveWeather = () => {
    const [temp, setTemp] = useState("--");
    const API_KEY = import.meta.env.VITE_WEATHER_KEY;

    useEffect(() => {
        console.log("My API Key is:", import.meta.env.VITE_WEATHER_KEY);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Wolcott,CT,US&units=imperial&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                if (data.main) setTemp(Math.round(data.main.temp));
            })
            .catch(() => setTemp("??"));
    }, [API_KEY]);

    return (
        <div className="status-content">
            <p className="stat-value main-font text-sm" ><span className="font-bold text-3xl">{temp}<span className="degree-unit text-base">°F</span></span> Wolcott, CT, USA</p>
        </div>
    );
};

export default LiveWeather;
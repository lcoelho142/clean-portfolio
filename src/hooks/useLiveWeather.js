import { useEffect, useState } from "react";

export default function useLiveWeather() {
    const [temp, setTemp] = useState("--");
    const apiKey = import.meta.env.VITE_WEATHER_KEY;

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Wolcott,CT,US&units=imperial&appid=${apiKey}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.main) setTemp(Math.round(data.main.temp));
            })
            .catch(() => setTemp("??"));
    }, [apiKey]);

    return temp;
}

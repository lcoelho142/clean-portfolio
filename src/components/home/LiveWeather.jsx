import useLiveWeather from '../../hooks/useLiveWeather.js';

const LiveWeather = () => {
    const temp = useLiveWeather();

    return (
        <div className="status-content">
            <p className="stat-value main-font text-sm" ><span className="font-bold text-3xl">{temp}<span className="degree-unit text-base">°F</span></span> Wolcott, CT, USA</p>
        </div>
    );
};

export default LiveWeather;
import '../styles/Home.scss'
import { Location } from './GetLocation'
import { useState } from 'react';
import GetWeather from './GetWeather'

export default () => {
    const [location, setLocation] = useState(false);
    const [weather, setWeather] = useState(false)
    return (
        <div className='container-home'>
            <button className="btn-weather" onClick={ () => setLocation(true) }>Click Me for Fetching your location!!</button>
            {location ? <Location /> : null}
            <button className='btn-weather' onClick={ () => setWeather(true) }>Click me to Fetch the weather!!</button>
            {weather ? <GetWeather /> : null}
        </div>
    );
}

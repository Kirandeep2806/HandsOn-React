import '../styles/Home.scss'
import { Location } from './GetLocation'
import { useState, useContext, createContext } from 'react';
import GetWeather from './GetWeather'

export const UserContext = createContext();

export default () => {
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    const [location, setLocation] = useState(false);
    const [weather, setWeather] = useState(false);
    return ( 
        <UserContext.Provider value={apiKey}>
            <div className='container-home'>
                <button className="btn-weather" onClick={ () => setLocation(true) }>Click Me for Fetching your location!!</button>
                {location ? <Location /> : null}
                <button className='btn-weather' onClick={ () => setWeather(true) }>Click me to Fetch the weather!!</button>
                {weather ? <GetWeather /> : null}
            </div>
        </UserContext.Provider>
    );
}

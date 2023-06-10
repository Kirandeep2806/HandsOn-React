import { useContext, useEffect, useState } from "react";
import { UserContext } from "./Home"
import axios from "axios";

export default () => {
    const [coords, setCoords] = useState(false);
    const [locData, setLocData] = useState(null);
    const apiKey = useContext(UserContext);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(pos => {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${apiKey}`;
            setCoords(true);

            axios.get(url)
            .then(response => {setLocData(response)})
            .catch(err => console.log(err))
        })
    }, []);

    return (
        <>
            <h1>Weather Report</h1>
            { coords ? 
                locData !== null ? 
                    locData.statusText === "OK" ? 
                        Object.entries(locData.data).map(([key, value], index) => {
                            return (
                                <div key={ index }>
                                    { key === "weather" ? 
                                        <p>
                                            <b>Report : </b>
                                            { value[0].description }
                                        </p> : 
                                        key === "main" ? 
                                            <p>
                                                <b>Temperature in celsius : </b>
                                                {(value.temp - 273).toFixed(2)}
                                            </p> : 
                                            null
                                    }
                                </div>
                            )
                        }) : 
                        "Didn't receive the response" : 
                    "Something went wrong!!" : 
                "Enable the location" 
            }
        </>
    )
}

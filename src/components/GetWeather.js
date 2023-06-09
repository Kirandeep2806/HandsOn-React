import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
    const [coords, setCoords] = useState(false);
    const [locData, setLocData] = useState(null);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(pos => {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=293f292922f11a4efffd648aee55d7af`
            setCoords(true);

            axios.get(url)
            .then(response => {setLocData(response)})
            .catch(err => console.log(err))
        })
    }, [])

    return (
        <>
            <h1>Weather Report</h1>
            { coords ? 
                locData !== null ? 
                    locData.statusText === "OK" ? 
                        Object.entries(locData.data).map(([key, value]) => {
                            return (
                                <>
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
                                </>
                            )
                        }) : 
                        "Didn't receive the response" : 
                    "Something went wrong!!" : 
                "Enable the location" 
            }
        </>
    )
}

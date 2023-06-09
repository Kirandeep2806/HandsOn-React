import { useState, useEffect } from "react";

const Location = () => {
    const [coords, setCoords] = useState(false);
    const [geoData, setGeoData] = useState(null);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=10&appid=293f292922f11a4efffd648aee55d7af`;
            setCoords(true);
            const response = await fetch(url).catch(err => console.log("Error at API calls"));
            if(response) {
                const content = await response.json();
                response.statusText == "OK" ? setGeoData(content) : setGeoData("Some error occurred");
            }
        });
    }, [])

    return (
        <div className="container">
            {!coords ? "Enable the permissions to view the location!!" :
                geoData!==null ?
                    geoData.map((item, index) => {
                        return (
                            <p key={ index }>{item.name}, {item.state}, {item.country}</p>
                        )
                    }) : "Data not fetched"
            }
        </div>
    )
}

export { Location }

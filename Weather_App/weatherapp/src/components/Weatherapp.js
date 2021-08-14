import React, { useEffect, useState } from 'react';
import "./css/style.css"


const Weatherapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=85941da2ef88bbd385059d5e89cf5406`
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="text"
                        value={search}
                        className="inputfield"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                </div>

                {
                    !city ? (
                        <p className="error">No Data Found</p>
                    ) : (
                        <div>
                            <div className="info">
                                <h2 className="location"><i className="fas fa-street-view"></i>{search}</h2>
                                <h1 className="temp">{city.temp}°Cel</h1>
                                <h3 className="tempmin_max">min : {city.temp_min} °Cel | max : {city.temp_max} °Cel</h3>
                            </div>

                            <div className="wave-one"></div>
                            <div className="wave-two"></div>
                            <div className="wave-three"></div>
                            <div id="weatherCon"><i className='fas fa-cloud-sun-rain display-1' style={{ color: "#eccc68", fontSize: "50px" }}></i></div>
                            

                        </div>
                    )}



            </div>
        </>
    )
}

export default Weatherapp;



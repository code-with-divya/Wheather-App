import React, { useEffect, useState } from "react";
import './WheatherApp.css';
import axios from "axios";
import search from './Image/search.png';
import cloudyImg from './Image/cloudy (2).png';
import humidityImg from './Image/humidity.png';
import clearImg from './Image/clear.png';
import rainImg from './Image/rain.png';
import drilzzImg from './Image/drilzz.png';
import windImg from './Image/wind (2).png';

export function WheatherApp() {
    const [data, setData] = useState({
        celcius: 10,
        name: 'London',
        humidity: 10,
        speed: 2,
        src: cloudyImg
    });
    const [name, setName] = useState('');

    const Click = () => {
        if (name !== "") {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=1f4e843c93a2de1655ac394a9dd71a4a&&units=metric`;
            axios.get(apiUrl)
                .then(res => {
                    let src = cloudyImg;
                    const weatherMain = res.data.weather[0].main.toLowerCase();

                    switch (weatherMain) {
                        case "clear":
                            src = clearImg;
                            break;
                        case "rain":
                            src = rainImg;
                            break;
                        case "drizzle":
                            src = drilzzImg;
                            break;
                        default:
                            src = cloudyImg;
                            break;
                    }

                    setData({
                        celcius: res.data.main.temp,
                        name: res.data.name,
                        humidity: res.data.main.humidity,
                        speed: res.data.wind.speed,
                        src: src
                    });
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <>
            <div className="container">
                <div className="we">
                    <div className="search">
                        <input
                            type="text"
                            placeholder="City Name...❤️"
                            onChange={e => setName(e.target.value)}
                        />
                        <button onClick={Click}>
                            <img src={search} alt="Search" />
                        </button>
                    </div>
                    <div className="winfo">
                        <img src={data.src} alt="Weather Icon" className="img" />
                        <h1>{Math.round(data.celcius)}℃</h1>
                        <h2>{data.name}</h2>
                        <div className="details">
                            <div className="col">
                                <img src={humidityImg} alt="Humidity" />
                                <div className="Humidity">
                                    <p>{Math.round(data.humidity)}%</p>
                                    <p>Humidity</p>
                                </div>
                            </div>
                            <div className="col">
                                <img src={windImg} alt="Wind" />
                                <div className="wind">
                                    <p>{Math.round(data.speed)} km/h</p>
                                    <p>Wind</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

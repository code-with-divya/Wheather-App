import { useState } from 'react';
import './Weather.css';
import search from './Image/search.png';
import axios from 'axios';

export function Weather() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const fetchdata = async () => {
        try {
            const result = await axios.get(`http://api.weatherapi.com/v1/current.json?key=866b8bdcde384602abd31807242506&q=${city}&aqi=no`);
            setWeather(result.data);
            console.log(result.data);
            applyWeatherClass(result.data.current.temp_c);
        } catch (error) {
            console.error("There is an error fetching the API", error);
        }
    };

    const applyWeatherClass = (temp) => {
        const weatherElement = document.getElementById("weather");
        if (weatherElement) {
            weatherElement.className = 'weather'; 
            if (temp > 27) {
                weatherElement.classList.add("bg-sunny");
            } else if (temp <= 27 && temp >= 15) {
                weatherElement.classList.add("bg-rainy");
            } else if (temp < 15) {
                weatherElement.classList.add("bg-snowy");
            }
        }
    };

    return (
        <div id='weather' className='weather'>
            <div className='searchbar'>
                <div className='serchdiv'>
                    <input
                        type='text'
                        placeholder='Search'
                        className='serinp'
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <img src={search} className='sim' onClick={fetchdata} alt="search icon" />
                </div>
                {weather && (
                    <div>
                        <img src={weather.current.condition.icon} className='icoon' alt="weather icon" />
                        <p className='wtemp'><span className='headbold'>Country: </span>{weather.location.country}</p>
                        <p className='wtemp'><span className='headbold'>City: </span>{weather.location.name}</p>
                        <p className='wtemp'><span className='headbold'>Temp: </span>{weather.current.temp_c}°C</p>
                        <p className='wtemp'><span className='headbold'>Time: </span>{weather.location.localtime}</p>
                        <p className='wtemp'><span className='headbold'>Cloud: </span>{weather.current.cloud}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

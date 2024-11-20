import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import TodatHighlite from '../components/TodatHighlite';


const WeatherData = ({darkMode}) => {
  // console.log(theme);
  
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('london')
    const [airQualityData, setAirQualityData] = useState(null)


    useEffect(() => {
        fetchWeatherData(city)
    },[city])

    const fetchAirQualityData =  (lat, lon) => {
      const api = "78f4320c20fe1a945ce4d16a5d6a66f5";
      axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api}`)
        .then(response =>{
          setAirQualityData(response.data.list[0]);
        })
        .catch(error => {
          console.error(error);
        });
    };


    const fetchWeatherData = async (city) => {
        const api = "78f4320c20fe1a945ce4d16a5d6a66f5"
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`)
        .then(response => response.json())
        .then(data => {setWeatherData(data)
        fetchAirQualityData(data.coord.lat, data.coord.lon);
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`)
        console.log(data)
        })
    }

    const handleSearch = (e) => {
        setCity(e)
    }


  return (
    <div>
      <Navbar onSearch={handleSearch} darkMode={darkMode}/>
      {weatherData && airQualityData && (
        <div className="flex gap-10 justify-center">
          <div className="">
            <Home weatherData={weatherData} darkMode={darkMode} />
          </div>
          <div className="">
            <TodatHighlite weatherData={weatherData} airQualityData={airQualityData}/>
          </div>
        </div>
      )}
    </div>
  )
}

export default WeatherData

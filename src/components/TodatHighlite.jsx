import React from 'react';
import AirIcon from '@mui/icons-material/Air';
import OpacityIcon from '@mui/icons-material/Opacity';
import SpeedIcon from '@mui/icons-material/Speed';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness3Icon from '@mui/icons-material/Brightness3';

const TodatHighlite = ({ weatherData, airQualityData }) => {
    const { main, wind, visibility, sys } = weatherData;
    const airQualityIndex = airQualityData?.main?.aqi || 'N/A';
    const { co, no, no2, o3 } = airQualityData?.components || {};

    const renderAirQualityDescription = (aqi) => {
        switch (aqi) {
            case 1:
                return 'Good';
            case 2:
                return 'Fair';
            case 3:
                return 'Moderate';
            case 4:
                return 'Poor';
            case 5:
                return 'Very Poor';
            default:
                return 'N/A';
        }
    };


    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className='bg-[#4B5563] text-white w-[840px] rounded-md p-6 mt-5  gap-8'>
           
        <div className="flex gap-6 mb-8">
            <div className="bg-[#282e38] p-4 rounded-md w-2/3">
            <div className="">
                    <h1 className='text-2xl'>Today's Highlights</h1>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                        <SpeedIcon />
                        <h1>Air Quality Index: </h1>
                        <p className='text-lg'>{renderAirQualityDescription(airQualityIndex)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <AirIcon />
                        <h1>Wind Speed: </h1>
                        <p className='text-lg'>{wind.speed} m/s</p>
                    </div>
                    <div className="flex gap-7 ">
                        <div className=" flex flex-col items-start gap-3">
                            <p>CO Level: </p>
                            <p className='text-lg'>{co} µg/m³</p>
                        </div>
                        <div className=" flex flex-col items-start gap-3">
                            <p>NO Level: </p>
                            <p className='text-lg'>{no} µg/m³</p>
                        </div>
                        <div className=" flex flex-col items-start gap-3">
                            <p>NO2 Level: </p>
                            <p className='text-lg'>{no2} µg/m³</p>
                        </div>
                        <div className=" flex flex-col items-start gap-3">
                            <p>O3 Level: </p>
                            <p className='text-lg'>{o3} µg/m³</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#282e38] p-4 flex flex-col justify-between rounded-md w-1/3">

                <div className="flex flex-col  gap-5 space-x-2">
                    <WbSunnyIcon  style={{ fontSize: 35 }}/>
                    <div className="flex gap-4">

                    <h1>Sunrise: </h1>
                    <p className='text-lg'>{formatTime(sys.sunrise)}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 space-x-2">
                    <Brightness3Icon style={{ fontSize: 35 }} />
                    <div className="flex gap-5">

                    <h1>Sunset: </h1>
                    <p className='text-lg'>{formatTime(sys.sunset)}</p>
                    </div>
                </div>
            </div>
        </div>

            <div className="">
                <div className="bg-[#282e38]  rounded-md flex justify-between p-6 w-full">
                    <div className="flex flex-col ">
                        <OpacityIcon />
                        <h1>Humidity: </h1>
                        <p className='text-lg'>{main.humidity}%</p>
                    </div>
                    <div className="flex flex-col ">
                        <SpeedIcon />
                        <h1>Pressure: </h1>
                        <p className='text-lg'>{main.pressure} hPa</p>
                    </div>
                    <div className="flex flex-col ">
                        <VisibilityIcon />
                        <h1>Visibility: </h1>
                        <p className='text-lg'>{visibility / 1000} km</p>
                    </div>
                    <div className="flex flex-col ">
                        <WbSunnyIcon />
                        <h1>Feels Like: </h1>
                        <p className='text-lg'>{main.feels_like}°C</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodatHighlite;
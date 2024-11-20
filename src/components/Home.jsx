import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';

const Home = ({ weatherData, darkMode }) => {
    const temperatureCelsius = weatherData?.main?.temp || 'N/A';
    const weatherDescription = weatherData?.weather[0]?.description || 'N/A';
    const cityName = weatherData?.name || 'N/A';
    const countryName = weatherData?.sys?.country || 'N/A';
    const timestap = weatherData?.dt || 'N/A';

    const currentDate = new Date(timestap * 1000).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) || "Date not available";

    const renderTemperatureIcon = () => {
        if (temperatureCelsius > 23) {
            return <WbSunnyIcon className='ml-2 text-orange-600' style={{ fontSize: 40 }} />;
        } else if (temperatureCelsius < 10) {
            return <AcUnitIcon className='ml-2 text-blue-600' style={{ fontSize: 40 }} />;
        } else {
            return <CloudIcon className='ml-4 text-white' style={{ fontSize: 40 }} />;
        }
    };

    return (
        <div className="p-5 bg-[#4B5563]  w-screen md:w-full  rounded-md mt-5 text-black">
            <div className="rounded-md  gap-4 md:gap-0 w-full  md:w-[240px] flex flex-col items-start p-6 bg-[#282e38] text-white">
                <div className="text-xl">Now</div>
                <div className="flex items-center text-3xl font-bold">{temperatureCelsius}°C
                    {renderTemperatureIcon()}
                </div>
                <div>
                    <p className="text-lg">{weatherDescription}</p>
                    <p className="text-sm">{currentDate}</p>
                    <p className="text-sm">{cityName}, {countryName}</p>
                </div>
            </div>
        </div>
    );
};

export default Home;

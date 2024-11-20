import React, { useState, useEffect } from 'react';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton } from "@mui/material";

import WeatherData from '../src/config/WeatherData'



const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  const toggleDarkMode = () => {
    
    setDarkMode(!darkMode);
  };
  return (
    <div className={` w-full h-screen ${
        darkMode ? "bg-gray-800 text-white" : "bg-light text-black"
      }`}>
        <div className="fixed right-[20.5px] top-6 z-99999">
        <IconButton onClick={toggleDarkMode} size="small">
          {darkMode ? (
            <Brightness7Icon className="text-white" />
          ) : (
            <Brightness4Icon className="text-black" />
          )}
        </IconButton>
        </div>
      <WeatherData darkMode={darkMode}/>
    </div>
  )
}

export default App

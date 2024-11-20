import React, { useState } from "react";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const Navbar = ({ onSearch, darkMode }) => {
    const [search, setSearch] = useState("");

    const handleSearchClick = () => {
        if (search.trim() !== "") {
            onSearch(search);
        }
    };

    return (
        <nav className={`navbar flex-3 navbar-expand-lg p-5  md:flex items-center justify-between ${darkMode ? 'bg-dark text-white' : 'bg-light text-black'}`}>
            <div className="container-fluid mb-5 md:mb-0">
                <a className="navbar-brand flex gap-2 items-center" href="#">
                    <FilterDramaIcon />
                    <p className="font-bold text-xl">Weather App</p>
                </a>
            </div>

            <div className="flex items-center gap-0">
                <div className="flex items-center">
                    <TextField
                        id="outlined-controlled"
                        placeholder="Search City"
                        size="small"
                        className={`rounded-l-md w-2/3 ${darkMode ? 'bg-gray-800 placeholder:text-white text-white' : 'bg-white text-black placeholder:text-black'}`}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        onClick={handleSearchClick}
                        className={`px-3 py-[7px] rounded-r-md ml-0 ${darkMode ? 'bg-[#4B5563]' : 'bg-black'}`}
                    >
                        <SearchIcon className={`${darkMode ? 'text-white' : 'text-white'}`} size="small" />
                    </button>
                    <div className="w-72 ml-2">
                        <button
                            onClick={() => onSearch("bangalore")}
                            className={`px-3 py-2 rounded-md ${darkMode ? 'bg-[#4B5563] text-black' : 'bg-black text-white'}`}
                        >
                            Current Location
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

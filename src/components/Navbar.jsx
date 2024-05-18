import React, { useContext } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { PortfolioContext } from "../context/AppContext";
import { NavLink, useNavigate } from "react-router-dom";
import "../index.css";

const Navbar = () => {
    const { theme, setTheme } = useContext(PortfolioContext);
    const navigate = useNavigate();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const clickHandler = () => {
        navigate("/");
    };

    return (
        <div className={`${theme === 'light' ? 'bg-light-background text-light-text' : 'bg-dark-background text-dark-text'}
        w-full bg-white flex justify - between items - center mx - auto px - 4 lg: px - 0`}>
            <div className={`${theme === 'light' ? 'bg-light-background text-light-text' : 'bg-dark-background text-dark-text'}
            fixed flex z-50 justify-evenly items-center w-full p-4 text-base lg:text-lg`}>
                <NavLink
                    to="/"
                    className={({ isActive }) => 
                        `nav-link ${isActive ? 'nav-link-active' : ''}`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/aboutme"
                    className={({ isActive }) => 
                        `nav-link ${isActive ? 'nav-link-active' : ''}`
                    }
                >
                    About Me
                </NavLink>

                <div className={`${theme === 'light' ? 'hover:text-light-text' :'hover:text-dark-text'}
                logo cursor-pointer text-5xl lg:text-4xl text-gradient-135  bg-clip-text text-transparent transition duration-300 ease-in-out`}
                    onClick={clickHandler}>pd</div>
                
                <NavLink
                    to="/portfolio"
                    className={({ isActive }) => 
                        `nav-link ${isActive ? 'nav-link-active' : ''}`
                    }
                >
                    Portfolio
                </NavLink>
                <div onClick={toggleTheme} className="text-xl lg:text-2xl font-semibold cursor-pointer">
                    {theme === 'light' ? <MdOutlineLightMode /> : <MdDarkMode />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import React, { useContext } from "react";
import { PortfolioContext } from "../context/AppContext";

const Footer = () => {
    
    const { theme } = useContext(PortfolioContext);

    return (
        <div className={`h-[2vh] flex flex-col items-center justify-center ${theme === 'light' ? 'text-light-primary':'text-dark-primary'}`}>
            <div>portfolio created by Pratik Dubariya</div>
            <div>© 2024</div>
        </div>
    )
}

export default Footer;
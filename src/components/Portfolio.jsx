import React, { useContext, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { PortfolioContext } from "../context/AppContext";
import { FaCircle } from "react-icons/fa6";

const Portfolio = () => {
    const [index, setIndex] = useState(0);
    const { content, theme } = useContext(PortfolioContext);

    useEffect(() => {
        const handleScroll = () => {
            const newIndex = Math.min(
                Math.floor(window.scrollY / window.innerHeight),
                content.length - 1
            );
            setIndex(newIndex);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [content.length]);

    const springProps = useSpring({
        opacity: 1,
        transform: 'translate3d(0,0,0)',
        from: { opacity: 0, transform: 'translate3d(0,100px,0)' },
        reset: true,
        height:'60vh'
    });

    return (
        <div className={`relative ${theme === 'light' ? 'bg-light-background text-light-text' : 'bg-dark-background text-dark-text'}`} style={{ height: `${content.length * 100}vh`, overflow: 'hidden' }}>
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center p-8 box-border">
                <animated.div style={springProps} >
                    <div className={`h-full
                        w-full max-w-4xl flex flex-col justify-center items-center`}>
                        <div className="rounded-t-[7px] pl-3 flex items-center w-full gap-2 text-[15px] justify-start p-1.5 bg-customGray">
                            <span className="text-red-400"><FaCircle /></span>
                            <span className="text-yellow-400"><FaCircle /></span>
                            <span className="text-green-400"><FaCircle /></span>
                        </div>
                        <div className={`h-full shadow-lg rounded-b-[7px] p-6 flex flex-col md:flex-row items-center ${theme === 'light' ? 'bg-customBlack text-dark-text' : 'bg-customBlack text-dark-text'}`}>
                            <div className="md:w-1/2 w-full md:pr-4">
                                <h2 className="text-3xl font-bold mb-4">{content[index].title}</h2>
                                <p className="text-lg">{content[index].description}</p>
                            </div>
                            <div className="md:w-1/2 w-full flex justify-center items-center md:pl-4 mt-4 md:mt-0">
                                {content[index].content}
                            </div>
                        </div>
                    </div>
                </animated.div>
            </div>
        </div>
    );
};

export default Portfolio;

import React, { useContext } from "react";
import MyImage from "../images/IMAGE.png";
import { FaSchoolFlag, FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaFacebook,FaDownload } from "react-icons/fa";
import Footer from "./Footer";
import MyResume from "../images/MyResume.pdf";
import { PortfolioContext } from "../context/AppContext";


const Home = () => {

    const { theme } = useContext(PortfolioContext);

    return (
        <div>
            <div className="h-[85vh] flex flex-col gap-5 lg:gap-0 lg:flex-row lg:w-2/3 lg:mx-auto items-center justify-center p-4 lg:p-0">
                <div className="flex lg:w-1/2 items-center justify-center ">
                    <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-135 flex items-end justify-center shadow-custom">
                        <img className="w-64 h-64 lg:w-80 lg:h-80 rounded-b-full" src={MyImage} alt="myImage" />
                    </div>
                </div>
                <div className="h-auto lg:h-96 w-full lg:w-1/2 mt-6 lg:mt-0">
                    <div className="h-full flex flex-col justify-evenly items-center lg:items-start text-center lg:text-left">
                        <div>
                            <div className="text-4xl lg:text-5xl font-roboto font-bold">Hi, I'm
                                <span className="text-gradient-135"> Pratik</span>
                                <span className="wave-emoji">🤚</span>
                            </div>
                            <div className="text-2xl lg:text-3xl font-roboto font-bold">I'm a Full Stack Developer.</div>
                        </div>
                        <div>
                            <div className="font-normal text-md lg:text-lg flex justify-center lg:justify-start items-center gap-2">
                                <span><FaSchoolFlag /></span>
                                <span>Schooling JNV</span>
                            </div>
                            <div className="font-normal text-md lg:text-lg flex justify-center lg:justify-start items-center gap-2">
                                <span><MdSchool /></span>
                                <span>College LDRP-ITR</span>
                            </div>
                            <div className="font-normal text-md lg:text-lg flex justify-center lg:justify-start items-center gap-2">
                                <span><IoIosMail /></span>
                                <span>pratikdubariya1501@gmail.com</span>
                            </div>
                        </div>
                        <div className="w-full flex justify-center lg:justify-start gap-4 flex-wrap lg:flex-nowrap items-center text-3xl lg:text-[42px]">
                            <div><a href="https://www.linkedin.com/in/pratik-dubariya-3a5570243" rel="noreferrer" target="_blank"><FaLinkedinIn /></a></div>
                            <div><a href="https://www.github.com/PrAtikDubariya" rel="noreferrer" target="_blank"><FaGithub /></a></div>
                            <div><a href="https://www.twitter.com/pratik_dubariya" rel="noreferrer" target="_blank"><FaXTwitter /></a></div>
                            <div><a href="https://www.instagram.com/pratik_d33_" rel="noreferrer" target="_blank"><FaInstagram /></a></div>
                            <div><a href="https://www.facebook.com/pratik.dubariya.5" rel="noreferrer" target="_blank"><FaFacebook /></a></div>
                        </div>
                        <div className={`${theme === 'light' ? 'bg-light-primary text-dark-primary':'bg-gradient-135 text-light-primary'} 
                        mt-4 p-2 rounded-[7px] text-lg lg:text-xl font-roboto font-normal`}>
                            <a href={MyResume} download className="flex justify-center items-center gap-2" >
                                <span><FaDownload/></span>
                                <span>My Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
import React, { useContext } from "react";
import { FaCircle } from "react-icons/fa6";
import { MdSportsCricket, MdSportsVolleyball } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { PortfolioContext } from "../context/AppContext";

const AboutMe = () => {
    const { theme } = useContext(PortfolioContext);

    return (
        <div className={`${theme === 'light' ? 'bg-light-background text-light-text' : 'bg-dark-background text-dark-text'}
        flex flex-col items-center justify-center font-monospace p-4 lg:p-0 mt-[8vh]`}>
            <div className="w-full lg:w-[55%]">
                {/* About Me Section */}
                <div className="bg-customBlack rounded-[7px] my-10 shadow-custom">
                    <div className="rounded-t-[7px] pl-3 flex items-center gap-2 text-[15px] justify-start p-1.5 bg-customGray">
                        <span className="text-red-400"><FaCircle /></span>
                        <span className="text-yellow-400"><FaCircle /></span>
                        <span className="text-green-400"><FaCircle /></span>
                    </div>
                    <div className="text-lg lg:text-xl py-8 px-6 lg:py-[3rem] lg:px-[3rem] flex flex-col gap-7">
                        <div>
                            <span className="text-customLightGreen">
                                pratikdubariya $
                            </span>
                            <span className="text-white"> cat aboutpratik
                            </span>
                        </div>
                        <div className="text-white">
                            <span className="text-customLightGreen">
                                aboutpratik
                            </span>
                            <span className="text-customDarkGreen">
                                {` (main) `}
                            </span>
                            <span className="text-customLightGreen">
                                $
                            </span>
                            <span> Hello! I'm Pratik. I'm a blockchain developer.
                                I studied CompEng at LDRP-ITR, I enjoy playing games,
                                and I believe blockchain will rule one day.
                                You should hire me!
                            </span>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="bg-customBlack rounded-[7px] my-10 shadow-custom">
                    <div className="rounded-t-[7px] pl-3 flex items-center gap-2 text-[15px] justify-start p-1.5 bg-customGray">
                        <span className="text-red-400"><FaCircle /></span>
                        <span className="text-yellow-400"><FaCircle /></span>
                        <span className="text-green-400"><FaCircle /></span>
                    </div>
                    <div className="text-lg lg:text-xl py-8 px-6 lg:py-[3rem] lg:px-[3rem] flex flex-col gap-7">
                        <div className="flex flex-col gap-2">
                            <div>
                                <span className="text-customLightGreen">
                                    pratikdubariya $
                                </span>
                                <span className="text-white"> cd skills/tools
                                </span>
                            </div>
                            <div>
                                <span className="text-customLightGreen">
                                    skills/tools
                                </span>
                                <span className="text-customDarkGreen">
                                    {` (main) `}
                                </span>
                                <span className="text-customLightGreen">
                                    {`$ `}
                                </span>
                                <span className="text-white">
                                    ls
                                </span>
                            </div>
                            <div className="text-customLightGreen">
                                Proficient With
                            </div>
                        </div>
                        <div className="text-white flex flex-col lg:flex-row lg:items-start justify-start w-full">
                            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                                <div>HTML/CSS/JS</div>
                                <div>React</div>
                                <div>Node</div>
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                                <div>Express</div>
                                <div>MongoDB</div>
                                <div>DSA</div>
                            </div>
                        </div>
                        <div className="text-customLightGreen py-3">Basics Of</div>
                        <div className="text-white flex flex-col gap-4">
                            <div>Smart Contracts</div>
                            <div>ethers.js</div>
                            <div>Hardhat</div>
                            <div>blockchain</div>
                        </div>
                    </div>
                </div>

                {/* Hobbies Section */}
                <div className="bg-customBlack rounded-[7px] my-10 shadow-custom">
                    <div className="rounded-t-[7px] pl-3 flex items-center gap-2 text-[15px] justify-start p-1.5 bg-customGray">
                        <span className="text-red-400"><FaCircle /></span>
                        <span className="text-yellow-400"><FaCircle /></span>
                        <span className="text-green-400"><FaCircle /></span>
                    </div>
                    <div className="text-lg lg:text-xl py-8 px-6 lg:py-[3rem] lg:px-[3rem] flex flex-col gap-7">
                        <div className="flex flex-col gap-2">
                            <div>
                                <span className="text-customLightGreen">
                                    pratikdubariya $
                                </span>
                                <span className="text-white"> cd hobbies/interests
                                </span>
                            </div>
                            <div>
                                <span className="text-customLightGreen">
                                    hobbies/interests
                                </span>
                                <span className="text-customDarkGreen">
                                    {` (main) `}
                                </span>
                                <span className="text-customLightGreen">
                                    {`$ `}
                                </span>
                                <span className="text-white">
                                    ls
                                </span>
                            </div>
                        </div>
                        <div className="text-white flex flex-col gap-3">
                            <div className="flex items-center justify-start gap-3 text-xl">
                                <span><MdSportsCricket /></span>
                                <span>Cricket</span>
                            </div>
                            <div className="flex items-center justify-start gap-3 text-xl">
                                <span><MdSportsVolleyball /></span>
                                <span>Volleyball</span>
                            </div>
                            <div className="flex items-center justify-start gap-3 text-xl">
                                <span><CgGames /></span>
                                <span>e-sports</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;

import React, { createContext, useState } from "react";

export const PortfolioContext = createContext();

function AppContextProvider({ children }) {
    
    const [loading, setLoading] = useState(false);
    const [theme, setTheme] = useState('light');
    const contentClassName = "content-class";

    const content = [

        {
            title: "Voting Portal",
            description:`As part of my college curriculum, I have created DApps using the Ethereum blockchain to provide security and transparency in the voting process. This Voting Portal includes the registration of voters and candidates. Additionally, it features an admin portal to manage and validate candidates and voters. The admin can also initiate the voting system and declare the results.`,
            content: (<div>
                <img src={`${process.env.PUBLIC_URL}/images/VotingPortal.jpeg`} alt="VotingPortal" />
            </div>),
        },
        {
            title: "Dinora Ceramic Industry",
            description: `As part of my college curriculum in the subject of Software Engineering, I have created the frontend of an e commerce company called Dinora Ceramic Industry using React, CSS, and JavaScript technologies·`,
            content:(<div>
                <img src={`${process.env.PUBLIC_URL}/images/Dinora.jpeg`} alt="DinoraCeramicIndustry"/>
            </div>),
        },
        {
            title: "Portfolio",
            description: `Hey, I am Pratik Dubariya. I am Blockchain Developer. I have created my portfolio using React.js and enhance the looks and feel of this using tailwind css. This WebPages details about myself my journey in CompEng which includes my projects.`,
            content: (<div>
                <img src={`${process.env.PUBLIC_URL}/images/PortFolio.jpeg`} alt="PortFolio" />
            </div>),
        },
    ]

    const value = {
        loading, setLoading,
        theme, setTheme,
        content,contentClassName
    };

    return <PortfolioContext.Provider value={value}>
        {children}
    </PortfolioContext.Provider>

}

export default AppContextProvider;
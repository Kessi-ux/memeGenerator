import React, { useState } from "react";
import reactLogo from "../assets/nikola.jpg";

const Header = (props) => {
    return (
        <div className="Header">
            <nav className={props.darkMode ? "dark" : ""}>
                <img className="ReactLogo" src={reactLogo} alt="React logo" />
                <h3><span className="ReactFactsTitle">React Facts</span></h3>
                <h1 className="ProjectTitle">React Course - Project 1</h1>
                <div className="toggler">
                    <p className="toggler--light">Light</p>
                    <div className="toggle--slider" onClick={props.toggleDarkMode}>
                        <div className={`toggler--slider--circle ${props.darkMode ? 'dark' : ''}`}></div>
                    </div>
                    <p className="toggler--dark">Dark</p>
                </div>
            </nav>
        </div>
    );
}

export const Apple = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>
    );
};

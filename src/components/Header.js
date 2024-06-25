import React from 'react';
import '../styles/Header.css';
import TruecallerLogo from "../assets/truecaller.svg"

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={TruecallerLogo} alt="Truecaller Logo" />
            </div>
        </header>
    );
};

export default Header;

import React from 'react';
import '../styles/Header.css';
import TruecallerLogo from "../assets/truecaller.svg";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link to='/'>
                <div className="logo">
                    <img src={TruecallerLogo} alt="Truecaller Logo" />
                </div>
            </Link>
        </header>
    );
};

export default Header;

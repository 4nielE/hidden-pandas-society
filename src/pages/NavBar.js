import React, { useState } from "react";
import { Link } from 'react-router-dom';
import twitter from '../img/twitter_40.png';
import discord from '../img/discord_40.png';
import opensea from '../img/opensea_40.png';
import Hamburger from 'hamburger-react'

function NavBar() {
    // **************************
    // *     State Variables    *
    // **************************
    const [isOpen, setOpen] = useState(false)

    // **************************
    // *     Style Variables    *
    // **************************
    const socialStyleTwitter = {
        backgroundImage: `url(${twitter})`,
        textDecoration: 'none',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    const socialStyleDiscord = {
        backgroundImage: `url(${discord})`,
        textDecoration: 'none',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    const socialStyleOpensea = {
        backgroundImage: `url(${opensea})`,
        textDecoration: 'none',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    // **************************
    // *  Animations Functions  *
    // **************************
    function toggleMenu() {
        if (isOpen == true) {
            return (
                <div id="bgr-nav-bar">
                    <Link id="bgr-nav-bar-item" to='/home'>Home</Link>
                    <Link id="bgr-nav-bar-item" to='/vision'>Vision</Link>
                    <Link id="bgr-nav-bar-item" to='/team'>Team</Link>
                    <Link id="bgr-nav-bar-item" to='/faq'>FAQ</Link>
                    <Link id="bgr-nav-bar-item" to='/mint'>Mint</Link>
                    <div id="bgr-socials">
                        <Link id="nav-bar-item-socials" to='//twitter.com' style={socialStyleTwitter} target="_blank"></Link>
                        <Link id="nav-bar-item-socials" to='//discord.gg' style={socialStyleDiscord} target="_blank"></Link>
                        <Link id="nav-bar-item-socials" to='//opensea.io' style={socialStyleOpensea} target="_blank"></Link>
                    </div>
                </div>
            );
        }
    }

    /*************************** RENDERING ******************************/
    /*************************** RENDERING ******************************/

    return (
        <div id="navigation">
            <div id="logo">
                <Link id="nav-bar-item-logo" to='/home' style={{ textDecoration: 'none' }}>🐼 Hidden Pandas Society</Link>
            </div>
            <div id="nav-bar">
                <nav>
                    <ul>
                        <Link id="nav-bar-item" to='/home'>Home</Link>
                        <Link id="nav-bar-item" to='/vision'>Vision</Link>
                        <Link id="nav-bar-item" to='/team'>Team</Link>
                        <Link id="nav-bar-item" to='/faq'>FAQ</Link>
                        <Link id="nav-bar-item" to='/mint'>Mint</Link>
                    </ul>
                </nav>
            </div>
            <div id="socials">
                <ul>
                    <Link id="nav-bar-item-socials" to='//twitter.com' style={socialStyleTwitter} target="_blank"></Link>
                    <Link id="nav-bar-item-socials" to='//discord.gg' style={socialStyleDiscord} target="_blank"></Link>
                    <Link id="nav-bar-item-socials" to='//opensea.io' style={socialStyleOpensea} target="_blank"></Link>
                </ul>
            </div>

            <div id="bgr-menu">
                <div id="bgr-toggle">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
                {toggleMenu()}

            </div>
        </div>
    );
}

export default NavBar;

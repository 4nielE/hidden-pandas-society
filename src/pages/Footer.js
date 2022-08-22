// React imports
import React from "react";

// Packages imports
import { Link } from 'react-router-dom';

// Images imports
import twitter from '../img/twitter_40.png';
import discord from '../img/discord_40.png';
import opensea from '../img/opensea_40.png';

function Footer() {
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

    /*************************** RENDERING ******************************/
    /*************************** RENDERING ******************************/

    return (
        <div id="footer">
            <div id="bgr-socials-footer">
                <Link id="nav-bar-item-socials" to='//twitter.com' style={socialStyleTwitter} target="_blank"></Link>
                <Link id="nav-bar-item-socials" to='//discord.gg' style={socialStyleDiscord} target="_blank"></Link>
                <Link id="nav-bar-item-socials" to='//opensea.io' style={socialStyleOpensea} target="_blank"></Link>
            </div>
            <h2 id="footer-text">🐼 HIDDEN PANDAS SOCIETY</h2>
            <div id="footer-text-info">© 2022 Hidden Pandas Society</div>
        </div>
    );
}

export default Footer;

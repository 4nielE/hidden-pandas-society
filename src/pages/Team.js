import React from "react";
import { Link } from 'react-router-dom';
import twitter from '../img/twitter_40.png';

function Team() {
    const socialStyleTwitter = {
        backgroundImage: `url(${twitter})`,
        textDecoration: 'none',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return (
        <div id="header-team">
            <div id="hero-team-title">Team</div>
            <div id="team-section">
                <div id="team-row">
                    <div id="team-individual-card">
                        <div id="team-individual-infos">
                            <div id="team-name">SebB</div>
                            <div id="team-role">Artist</div>
                            <div id="team-link">
                                <Link id="nav-bar-item-socials" to='//twitter.com' style={socialStyleTwitter} target="_blank"></Link>
                            </div>
                        </div>
                        <div id="team-individual-img-1"></div>
                    </div>
                    <div id="team-individual-card">
                        <div id="team-individual-infos">
                            <div id="team-name">Massai</div>
                            <div id="team-role">Artist</div>
                            <div id="team-link">
                                <Link id="nav-bar-item-socials" to='//twitter.com' style={socialStyleTwitter} target="_blank"></Link>
                            </div>
                        </div>
                        <div id="team-individual-img-2"></div>
                    </div>
                    <div id="team-individual-card">
                        <div id="team-individual-infos">
                            <div id="team-name">Elektra</div>
                            <div id="team-role">Artist</div>
                            <div id="team-link"><Link id="nav-bar-item-socials" to='//twitter.com' style={socialStyleTwitter} target="_blank"></Link></div>
                        </div>
                        <div id="team-individual-img-3"></div>
                    </div>
                    <div id="team-individual-card">
                        <div id="team-individual-infos">
                            <div id="team-name">Dan</div>
                            <div id="team-role">Marketing</div>
                            <div id="team-link"><Link id="nav-bar-item-socials" to='//twitter.com' style={socialStyleTwitter} target="_blank"></Link></div>
                        </div>
                        <div id="team-individual-img-4"></div>
                    </div>
                </div>
                <div id="team-row">
                    <div id="team-individual-card">
                        <div id="team-individual-infos">
                            <div id="team-name">Gus</div>
                            <div id="team-role">Team Lead</div>
                            <div id="team-link"><Link id="nav-bar-item-socials" to='//twitter.com' style={socialStyleTwitter} target="_blank"></Link></div>
                        </div>
                        <div id="team-individual-img-5"></div>
                    </div>
                    <div id="team-individual-card">
                        <div id="team-individual-infos">
                            <div id="team-name">Luigio</div>
                            <div id="team-role">Developer</div>
                            <div id="team-link"><Link id="nav-bar-item-socials" to='//twitter.com' style={socialStyleTwitter} target="_blank"></Link></div>
                        </div>
                        <div id="team-individual-img-6"></div>
                    </div>
                    <div id="team-individual-card">
                        <div id="team-individual-infos">
                            <div id="team-name">Zeus</div>
                            <div id="team-role">Developer</div>
                            <div id="team-link"><Link id="nav-bar-item-socials" to='//twitter.com' style={socialStyleTwitter} target="_blank"></Link></div>
                        </div>
                        <div id="team-individual-img-7"></div>
                    </div>
                    <div id="team-individual-card">
                        <div id="team-individual-infos">
                            <div id="team-name">Markus</div>
                            <div id="team-role">Advisor</div>
                            <div id="team-link"><Link id="nav-bar-item-socials" to='//twitter.com' style={socialStyleTwitter} target="_blank"></Link></div>
                        </div>
                        <div id="team-individual-img-8"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
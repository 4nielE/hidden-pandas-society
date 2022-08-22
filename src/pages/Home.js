// React imports
import React, { useState, useEffect } from "react";

// Packages imports
import Marquee from "react-fast-marquee";
import MovingComponent from "react-moving-text";
import Faq from 'react-faq-component';
import { Link } from 'react-router-dom';

// Images imports
import coin from '../img/coin.png';
import box from '../img/box.png';
import wardrobe from '../img/wardrobe.png';
import community from '../img/community.png';
import mystery from '../img/mystery.png';
import society from '../img/society.png';
import imgvision from '../img/imgvision.png';
import twitter from '../img/twitter_40.png';

// Web3 imports
import {
    contract,
    connectWallet,
    getCurrentWalletConnected,
    mint,
    loadAmountMinted
} from "../util/interact.js";

function Home() {
    // **************************
    // *  Animations Variables  *
    // **************************
    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);
    const [isHovering4, setIsHovering4] = useState(false);
    const [isHovering5, setIsHovering5] = useState(false);
    const [isHovering6, setIsHovering6] = useState(false);

    const handleMouseOver1 = () => {
        setIsHovering1(true);
    };

    const handleMouseOut1 = () => {
        setIsHovering1(false);
    };

    const handleMouseOver2 = () => {
        setIsHovering2(true);
    };

    const handleMouseOut2 = () => {
        setIsHovering2(false);
    };

    const handleMouseOver3 = () => {
        setIsHovering3(true);
    };

    const handleMouseOut3 = () => {
        setIsHovering3(false);
    };

    const handleMouseOver4 = () => {
        setIsHovering4(true);
    };

    const handleMouseOut4 = () => {
        setIsHovering4(false);
    };

    const handleMouseOver5 = () => {
        setIsHovering5(true);
    };

    const handleMouseOut5 = () => {
        setIsHovering5(false);
    };

    const handleMouseOver6 = () => {
        setIsHovering6(true);
    };

    const handleMouseOut6 = () => {
        setIsHovering6(false);
    };

    // **************************
    // *     Style Variables    *
    // **************************
    const styleGridItemNone1or3 = {
        paddingRight: "10px",
        fontStyle: "italic",
        fontSize: "35px"
    }

    const styleGridItem1 = {
        backgroundImage: `url(${coin})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#5E17A3'
    }

    const styleGridItem2 = {
        backgroundImage: `url(${mystery})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#FEC547'
    }

    const styleGridItem3 = {
        backgroundImage: `url(${community})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#FFB8B8'
    }

    const styleGridItem4 = {
        backgroundImage: `url(${wardrobe})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#1C4282'
    }

    const styleGridItem5 = {
        backgroundImage: `url(${box})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#26B1CF'
    }

    const styleGridItem6 = {
        backgroundImage: `url(${society})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: '#6D07A8'
    }

    // Vision
    const styleImgVision = {
        backgroundImage: `url(${imgvision})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    // Team
    const socialStyleTwitter = {
        backgroundImage: `url(${twitter})`,
        textDecoration: 'none',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    // **************************
    // *      FAQ Variable      *
    // **************************
    const dataFAQ = {
        title: "FAQ",
        rows: [
            {
                title: "What are Hidden Pandas Society?",
                content: "Hidden Pandas Society is a the first step of a long term vision of virtual assets. Early adopters will be rewarded with several and secret assets to be determined in the near future."
            },
            {
                title: "What chain is Hidden Pandas Society?",
                content: "Note that this is a Test NFT. Thus, the chain is on Goerli Ethereum."
            },
            {
                title: "When is the mint?",
                content: "Mint is LIVE!"
            },
            {
                title: "How much do each Panda cost?",
                content: "Free MINT!"
            },
            {
                title: "Is there utility?",
                content: "Utilities of the NFTs will be announced when mint has terminated."
            },
            {
                title: "Is there a roadmap?",
                content: "Yes. Please constantly check our twitter and/or discord."
            },
            {
                title: "What's the contract address?",
                content: "0x756688Dce086cBEddaAD5aEA41E7460fC1f1c12B"
            }]
    }

    const stylesFAQ = {
        bgColor: 'transparent',
        titleTextColor: "#000",
        rowTitleColor: "#000",
        rowContentColor: "#2e2e2e",
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };

    const configFAQ = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    // **************************
    // *     State Variables    *
    // **************************
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("");
    const [maxMintPerWallet, setMaxMintPerWallet] = useState(2);
    let [count, setCount] = useState(1);
    const [_amountMinted, set_amountMinted] = useState(0);
    const [_maxSupply, set_maxSupply] = useState(100);

    // **************************
    // *       Use Effect       *
    // **************************
    useEffect(async () => {
        async function fetchCurrentAmountMinted() {
            const _curAmountMinted = await loadAmountMinted();
            set_amountMinted(_curAmountMinted);
        }
        fetchCurrentAmountMinted();
        currentAmountMintedListener();

        async function fetchWallet() {
            const { address, status } = await getCurrentWalletConnected();
            setWallet(address);
            setStatus(status);
        }
        fetchWallet();
        addWalletListener();
    }, []);

    // **************************
    // *    Wallet functions    *
    // **************************
    function currentAmountMintedListener() {
        contract.events.AmountMinted({}, (error, data) => {
            if (error) {
                setStatus("😥 " + error.message);
            } else {
                set_amountMinted(data.returnValues[0]);
                setStatus("🎉");
            }
        })
    }

    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setWallet(accounts[0]);
                    setStatus("👆🏽 Write a message in the text-field above.");
                } else {
                    setWallet("");
                    setStatus("🦊 Connect to Metamask using the top right button.");
                }
            });
        } else {
            setStatus(
                <p>
                    {" "}
                    🦊{" "}
                    <a target="_blank" href={`https://metamask.io/download.html`}>
                        You must install Metamask, a virtual Ethereum wallet, in your
                        browser.
                    </a>
                </p>
            );
        }
    }

    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.status);
        setWallet(walletResponse.address);
    };

    const onMintPressed = async () => {
        const { status } = await mint(walletAddress, count);
        setStatus(status);
    };

    // **************************
    // *  Front-end functions   *
    // **************************
    function incrementCount() {
        if (count < maxMintPerWallet) {
            count = count + 1;
            setCount(count);
        }
    }

    function decrementCount() {
        if (count > 1) {
            count = count - 1;
            setCount(count);
        }
    }

    /*************************** RENDERING ******************************/
    /*************************** RENDERING ******************************/

    return (
        <div id="header-home" >
            <div id="home-title-container">
                <h1 id="home-title">Hidden Pandas<br />Society</h1>
                <div id="home-image-container">
                    <MovingComponent
                        id="home-image-container-animation"
                        type="fadeInFromBottom"
                        duration="2000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">
                        <div id="home-image-left"></div>
                        <div id="home-image-center"></div>
                        <div id="home-image-right"></div>
                    </MovingComponent>
                </div>
            </div>
            <div id="welcome-container">
                <h1 id="welcome-text">
                    Welcome to the Hidden Pandas Society
                </h1>
                <p id="sub-welcome-text">HPS is a collection of 10,000 Hidden Pandas NFTs—unique digital collectibles living on the Ethereum blockchain.<br />Your Hidden Pandas doubles as your Club membership card, and grants access to members-only benefits, the first of which is access to THE PANDAVERSE, a collaborative graffiti board.</p>
            </div>
            <div id="grid-container">
                <div id="grid-row-1">
                    <div id="grid-item-none-1or3">
                        {isHovering1 && <h2 style={styleGridItemNone1or3}>
                            <MovingComponent
                                type="fadeInFromRight"
                                duration="500ms"
                                delay="0s"
                                direction="normal"
                                timing="ease"
                                iteration="1"
                                fillMode="none">
                                Airdrop
                            </MovingComponent>
                        </h2>}
                    </div>
                    <div id="grid-item" onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut1}
                        style={styleGridItem1}>
                        <h2 id="grid-text-small-screen">Airdrop</h2>
                    </div>
                    <div id="grid-item-none-1or3">
                        {isHovering2 && <h2 style={styleGridItemNone1or3}>
                            <MovingComponent
                                type="fadeInFromRight"
                                duration="500ms"
                                delay="0s"
                                direction="normal"
                                timing="ease"
                                iteration="1"
                                fillMode="none">
                                Mystery
                            </MovingComponent>
                        </h2>}
                    </div>
                    <div id="grid-item" onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut2}
                        style={styleGridItem2}>
                        <h2 id="grid-text-small-screen">Mystery</h2>
                    </div>
                </div>
                <div id="grid-row-2">
                    <div id="grid-item" onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut3}
                        style={styleGridItem3}>
                        <h2 id="grid-text-small-screen">Community</h2>
                    </div>
                    <div id="grid-item-none-2">
                        {isHovering3 && <h2 style={styleGridItemNone1or3}>
                            <MovingComponent
                                type="fadeInFromLeft"
                                duration="500ms"
                                delay="0s"
                                direction="normal"
                                timing="ease"
                                iteration="1"
                                fillMode="none">
                                Community
                            </MovingComponent>
                        </h2>}
                    </div>
                    <div id="grid-item" onMouseOver={handleMouseOver4} onMouseOut={handleMouseOut4}
                        style={styleGridItem4}>
                        <h2 id="grid-text-small-screen">Wardrobe</h2>
                    </div>
                    <div id="grid-item-none-2">
                        {isHovering4 && <h2 style={styleGridItemNone1or3}>
                            <MovingComponent
                                type="fadeInFromLeft"
                                duration="500ms"
                                delay="0s"
                                direction="normal"
                                timing="ease"
                                iteration="1"
                                fillMode="none">
                                Wardrobe
                            </MovingComponent>
                        </h2>}
                    </div>
                </div>
                <div id="grid-row-3">
                    <div id="grid-item-none-1or3">
                        {isHovering5 && <h2 style={styleGridItemNone1or3}>
                            <MovingComponent
                                type="fadeInFromRight"
                                duration="500ms"
                                delay="0s"
                                direction="normal"
                                timing="ease"
                                iteration="1"
                                fillMode="none">
                                Box
                            </MovingComponent>
                        </h2>}
                    </div>
                    <div id="grid-item" onMouseOver={handleMouseOver5} onMouseOut={handleMouseOut5}
                        style={styleGridItem5}>
                        <h2 id="grid-text-small-screen">Box</h2>
                    </div>
                    <div id="grid-item-none-1or3">
                        {isHovering6 && <h2 style={styleGridItemNone1or3}>
                            <MovingComponent
                                type="fadeInFromRight"
                                duration="500ms"
                                delay="0s"
                                direction="normal"
                                timing="ease"
                                iteration="1"
                                fillMode="none">
                                Society
                            </MovingComponent>
                        </h2>}
                    </div>
                    <div id="grid-item" onMouseOver={handleMouseOver6} onMouseOut={handleMouseOut6}
                        style={styleGridItem6}>
                        <h2 id="grid-text-small-screen">Society</h2>
                    </div>
                </div>
            </div>
            <div id="header-vision">
                <div id="hero-vision-section">
                    <div id="hero-img-vision-card" style={styleImgVision}>
                    </div>
                    <div id="hero-content-vision-card">
                        <h1 id="h1-vision">HPS's Vision</h1>
                        <h2 id="h2-vision">A fundamental belief, not a roadmap.</h2>
                        <p id="p-vision">We’re all here because we believe in the same thing. A shared belief in the power of Web3, and its ability to bridge gaps. Whether that’s bridging Web2 to Web3, real life to the digital multiverse, or bridging the global wealth divide.</p>
                        <p id="p-vision">It is this return to the foundation of Web3 and its ability to link anyone, anywhere, to a decentralized web of opportunities, that forms the basis of everything we do. Our mission at HPS is to facilitate this gap-closing as much as we can. This fundamentally means connecting people; to ourselves, and one another.</p>
                        <p id="p-vision">The primary focus is to establish and connect our on-chain brand to its off-chain equivalent. Bridge digital to physical, if you will. Think real-life events, high-quality merchandise, community meetups, and getting HPS integrated into your favorite off-chain products.</p>
                    </div>
                </div>
                <div id="content-vision-section">
                    <div id="content-vision-title">
                        <h1 id="h1-vision-middle-title">What that means.</h1>
                        <h2 id="h2-vision-middle-subtitle">Tangible benefits.</h2>
                    </div>
                    <div id="content-vision-4-benefits">
                        <div id="content-vision-4-benefits-row">
                            <div id="content-vision-benefit">
                                <div id="content-vision-benefit-item">
                                    <div id="content-vision-benefit-item-icon">
                                        <p id="content-benefit-icon">🎉</p>
                                    </div>
                                    <div id="content-vision-benefit-item-text">
                                        <h2 id="content-vision-benefit-item-text-title">IRL Events</h2>
                                        <p id="content-vision-benefit-item-text-p">A brand should not be a digital silo. We're trekking across the world to put HPS on the map. At both our own events, and NFT-focused satellite events.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="content-vision-benefit">
                                <div id="content-vision-benefit-item">
                                    <div id="content-vision-benefit-item-icon">
                                        <p id="content-benefit-icon">👕</p>
                                    </div>
                                    <div id="content-vision-benefit-item-text">
                                        <h2 id="content-vision-benefit-item-text-title">Merchandise, fast.</h2>
                                        <p id="content-vision-benefit-item-text-p">We've hired a world class Merchandise Lead and gave him free reign over our merchandise strategy. No need to sit around waiting for ages. High-quality gear, coming out soon.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="content-vision-4-benefits-row">
                            <div id="content-vision-benefit">
                                <div id="content-vision-benefit-item">
                                    <div id="content-vision-benefit-item-icon">
                                        <p id="content-benefit-icon">✨</p>
                                    </div>
                                    <div id="content-vision-benefit-item-text">
                                        <h2 id="content-vision-benefit-item-text-title">Showroom</h2>
                                        <p id="content-vision-benefit-item-text-p">Merchandise isn't just a holder benefit. It's an organizational benefit. Some—not all—pieces of merchandise will be for sale to the public. Because maximizing revenue streams is key to a long-term play.</p>
                                    </div>
                                </div>
                            </div>
                            <div id="content-vision-benefit">
                                <div id="content-vision-benefit-item">
                                    <div id="content-vision-benefit-item-icon">
                                        <p id="content-benefit-icon">🤝</p>
                                    </div>
                                    <div id="content-vision-benefit-item-text">
                                        <h2 id="content-vision-benefit-item-text-title">HPS Studios</h2>
                                        <p id="content-vision-benefit-item-text-p">HPS is just the beginning of our story. Our studio is the umbrella organization that will be funded by our efforts. To break the norm; to revitalize what brought us here in the first place.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="marquee">
                <Marquee gradientWidth={0} speed="30" pauseOnClick="true" direction="left">
                    <div className="marquee-img" id="marquee-img-1-id"></div>
                    <div className="marquee-img" id="marquee-img-2-id"></div>
                    <div className="marquee-img" id="marquee-img-3-id"></div>
                    <div className="marquee-img" id="marquee-img-4-id"></div>
                    <div className="marquee-img" id="marquee-img-5-id"></div>
                    <div className="marquee-img" id="marquee-img-6-id"></div>
                    <div className="marquee-img" id="marquee-img-7-id"></div>
                    <div className="marquee-img" id="marquee-img-8-id"></div>
                </Marquee>
                <Marquee gradientWidth={0} speed="30" pauseOnClick="true" direction="right">
                    <div className="marquee-img" id="marquee-img-1-id"></div>
                    <div className="marquee-img" id="marquee-img-2-id"></div>
                    <div className="marquee-img" id="marquee-img-3-id"></div>
                    <div className="marquee-img" id="marquee-img-4-id"></div>
                    <div className="marquee-img" id="marquee-img-5-id"></div>
                    <div className="marquee-img" id="marquee-img-6-id"></div>
                    <div className="marquee-img" id="marquee-img-7-id"></div>
                    <div className="marquee-img" id="marquee-img-8-id"></div>
                </Marquee>
            </div>
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
            <div id="faq-container">
                <Faq data={dataFAQ} styles={stylesFAQ} config={configFAQ} />
            </div>
            <div id="minting-text-container">
                <h1 id="mint-text">
                    Let's MINT!
                </h1>
            </div><div id="header-mint">
                <div id="minting-row">
                    <div id="image-minting-card"></div>
                    <div id="minting-card">
                        <button id="wallet-button" onClick={connectWalletPressed}>
                            {walletAddress.length > 0 ? (
                                String(walletAddress).substring(0, 5) +
                                "..." +
                                String(walletAddress).substring(38)
                            ) : (
                                <span>🦊 Connect Wallet</span>
                            )}
                        </button>
                        <div id="minting-section">
                            <div id="supply-left">
                                <p>FREE MINT</p>
                                <p>Max 2 NFT per mint</p>
                                <p>{_amountMinted} / {_maxSupply}</p>
                            </div>
                            <div id="choose-mint-number-div">
                                <button id="increment-decrement" onClick={decrementCount}>-</button>
                                <div id="count-to-mint">{count}</div>
                                <button id="increment-decrement" onClick={incrementCount}>+</button>
                            </div>
                            <div id="mint-button-div">
                                <button id="mint-button" onClick={onMintPressed}>
                                    Mint {count} NFT
                                </button>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </div >
    );
}

export default Home;

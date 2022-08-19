import React from "react";
import imgvision from '../img/imgvision.png';

function Vision() {
    const styleImgVision = {
        backgroundImage: `url(${imgvision})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return (
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
                    <h1 id="h1-vision">What that means.</h1>
                    <h2 id="h2-vision">Tangible benefits.</h2>
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
    );
}

export default Vision;
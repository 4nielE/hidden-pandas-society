// React imports
import React from 'react';

// Packages imports
import Faq from 'react-faq-component';

function FAQ() {
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
                content: "0x090AaB9C0C178Dfc8df46fdE3696bF551da8f9AD"
            }]
    }

    const stylesFAQ = {
        bgColor: 'transparent',
        titleTextColor: "#000",
        rowTitleColor: "#000",
        rowContentColor: "#2e2e2e"
    };

    const configFAQ = {
        // animate: true,
        // arrowIcon: "V",
        // tabFocus: true
    };

    /*************************** RENDERING ******************************/
    /*************************** RENDERING ******************************/

    return (
        <div id="faq-container">
            <Faq data={dataFAQ} styles={stylesFAQ} config={configFAQ} />
        </div>
    );
}

export default FAQ;
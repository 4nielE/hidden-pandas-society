import React from 'react';
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
                content: "It's hidden for a reason."
            },
            {
                title: "What chain is Hidden Pandas Society?",
                content: "Ethereum"
            },
            {
                title: "When is the mint?",
                content: "TBA"
            },
            {
                title: "How much do each Panda cost?",
                content: "Free MINT!"
            },
            {
                title: "Is there utility?",
                content: "lol! no"
            },
            {
                title: "Is there a roadmap?",
                content: "lol! no"
            },
            {
                title: "What's the contract address?",
                content: "0xhereisthecontract"
            }]
    }

    const stylesFAQ = {
        bgColor: 'transparent',
        titleTextColor: "#000",
        rowTitleColor: "#000",
        rowContentColor: "#2e2e2e",
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
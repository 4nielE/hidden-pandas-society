require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const admin_address = process.env.PUBLIC_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);

const contract_abi = require("../contractHPS_abi.json");
const contract_address = "0x090AaB9C0C178Dfc8df46fdE3696bF551da8f9AD";

export const contract = new web3.eth.Contract(
    contract_abi,
    contract_address
);

/************************************************************************************************* */

export const connectWallet = async () => {

    console.log("version: " + web3.version);
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const obj = {
                status: "👍 Connected",
                address: addressArray[0],
            };
            return obj;
        } catch (err) {
            return {
                address: "",
                status: "😥 " + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                        <a target="_blank" href={`https://metamask.io/download.html`}>
                            You must install Metamask, a virtual Ethereum wallet, in your
                            browser.
                        </a>
                    </p>
                </span>
            ),
        };
    }
};

export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_accounts",
            });
            if (addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    status: "👍 Connected",
                };
            } else {
                return {
                    address: "",
                    status: "🦊 Not Connected",
                };
            }
        } catch (err) {
            return {
                address: "",
                status: "😥 " + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                        <a target="_blank" href={`https://metamask.io/download.html`}>
                            You must install Metamask, a virtual Ethereum wallet, in your
                            browser.
                        </a>
                    </p>
                </span>
            ),
        };
    }
};

export const mint = async (address, amount) => {

    console.log("version: " + web3.version);
    if (!window.ethereum || address === null) {
        return {
            status:
                "💡 Connect your Metamask wallet to mint!",
        };
    }

    //set up cost for hex value
    const cost = amount * 0.003 * 10 ** 18;

    //set up transaction parameters
    const transactionParameters = {
        to: contract_address, // Required except during contract publications.
        from: address, // must match user's active address.
        data: contract.methods.mint(amount).encodeABI(),
        value: cost.toString(16),
    };

    //sign the transaction
    try {
        const txHash = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: [transactionParameters],
        });
        return {
            status: (
                <span>
                    ✅{" "}
                    <a target="_blank" href={`https://goerli.etherscan.io/tx/${txHash}`}>
                        View the status of your transaction on Etherscan!
                    </a>
                    <br />
                    ℹ️ Once the transaction is verified by the network, the message will
                    be updated automatically.
                </span>
            ),
        };
    } catch (error) {
        return {
            status: "😥 " + error.message,
        };
    }
}

export const loadAmountMinted = async () => {
    const _totalSupply = await contract.methods.totalSupply().call();
    return _totalSupply;
}

export const loadMaxSupply = async () => {
    const _maxSupply = await contract.methods.maxSupply();
    return _maxSupply;
}

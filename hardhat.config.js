require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require("dotenv").config();

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const COIN_MARKET_CAP = process.env.COIN_MARKET_CAP;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [GOERLI_PRIVATE_KEY],
    },
    binance: {
      url: process.env.BINANCE_RPC_URL,
      accounts: [GOERLI_PRIVATE_KEY],
      gasPrice: 20000000000,
    },
    mumbai: {
      url: "",
      accounts: [process.env.ETHGLOBAL_PK],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },

  gasReporter: {
    enabled: true,
    currency: "USD",
    coinmarketcap: COIN_MARKET_CAP,
  },
};

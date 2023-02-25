import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { configs } from "./config";

require("dotenv").config();

const {  PRIVATE_KEY, ALCHEMY_PROVIDER } = configs;
const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: ALCHEMY_PROVIDER,
      accounts:  [`0x${PRIVATE_KEY}`],
    },
  },

};

export default config;

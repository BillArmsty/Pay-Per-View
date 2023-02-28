import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { configs } from "./config";

require("dotenv").config();


module.exports = {
  solidity: "0.8.17",
  
  defaultNetwork: "hyperspace",
    networks: {
        hyperspace: {
            chainId: 3141,
            url: "https://api.hyperspace.node.glif.io/rpc/v1",
      accounts: [configs.PRIVATE_KEY],
    },
  }

};

//export default config;

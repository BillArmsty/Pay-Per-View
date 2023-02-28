import { artifacts, ethers } from "hardhat";
import hre from "hardhat";
import fs from "fs";





const provider =  new ethers.providers.JsonRpcProvider("https://api.hyperspace.node.glif.io/rpc/v1");

async function main() {
  
  
  const feeData = await provider.getFeeData();
  const maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
  const Market = await hre.ethers.getContractFactory("Market");
  const market_add = await Market.deploy({maxPriorityFeePerGas});
  await market_add.deployed();
  console.log("Market deployed to:", market_add.address);
  
  // fs.writeFileSync("./config.ts", 
  //   `export const MarketplaceAddress` + ` = "${market_add.address}";`);
  
  
  
  const PayPerView = await artifacts.readArtifact("PayPerView");
  
  //const Markets = await artifacts.readArtifactSync("Market");
  
  fs.writeFileSync("artifacts/Marketplace.json", JSON.stringify(PayPerView));
  
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)

    })

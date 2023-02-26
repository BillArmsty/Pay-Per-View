import { ethers } from "hardhat";
import hre from "hardhat";
import fs from "fs";



async function main() {
  const Market = await hre.ethers.getContractFactory("Market");
  const market_add = await Market.deploy();
  await market_add.deployed();
  console.log("Market deployed to:", market_add.address);

  fs.writeFileSync("./config.ts", 
    `export const MarketplaceAddress` + ` = "${market_add.address}";`);

  const data = {
    address: market_add.address,
    abi: market_add.interface.format("json"),
  };

  fs.writeFileSync("./Marketplace.json", JSON.stringify(data));
  
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

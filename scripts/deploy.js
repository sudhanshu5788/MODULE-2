// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const initBalance = 1;
  const sudhanshu1 = await hre.ethers.getContractFactory("sudhanshu");
  const sudhanshu2 = await sudhanshu1.deploy(initBalance);
  await sudhanshu2.deployed();

  console.log(`A contract with balance of ${initBalance} eth deployed to ${sudhanshu2.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

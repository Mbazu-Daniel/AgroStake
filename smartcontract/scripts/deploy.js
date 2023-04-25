const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const agroStake = await ethers.getContractFactory("AgroStake");

  // deploy the contract
  const deployedAgroStake = await agroStake.deploy();

  await deployedAgroStake.deployed();

  // print the address of the deployed contract
  console.log("Verify Contract Address:", deployedAgroStake.address);

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(40000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: deployedAgroStake.address,
    constructorArguments: [],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

const { ethers } = require("hardhat");

async function main() {
  const contract = await ethers.getContractFactory("ContractName");

  const deployedcontract = await contract.deploy();

  await deployedcontract.deployed();

  console.log("Deployed Contract Address:", deployedcontract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

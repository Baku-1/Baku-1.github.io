const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const RoninP2PTradeAgreement = await hre.ethers.getContractFactory("RoninP2PTradeAgreement");
  const roninP2PTradeAgreement = await RoninP2PTradeAgreement.deploy();

  await roninP2PTradeAgreement.deployed();

  console.log("RoninP2PTradeAgreement address:", roninP2PTradeAgreement.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

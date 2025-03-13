const { ethers, run, network } = require("hardhat");

async function main() {
  await run('compile'); // We are compiling the contracts using Hardhat

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Step 1: Deploy RoninP2PFeeAndRewardDistribution
  const RoninP2PFeeAndRewardDistribution = await ethers.getContractFactory("RoninP2PFeeAndRewardDistribution");
  const roninP2PFeeAndRewardDistribution = await RoninP2PFeeAndRewardDistribution.deploy(deployer.address, deployer.address);
  await roninP2PFeeAndRewardDistribution.deployed();
  console.log("RoninP2PFeeAndRewardDistribution address:", roninP2PFeeAndRewardDistribution.address);

  // Step 2: Deploy RoninP2PTradeAgreement
  const RoninP2PTradeAgreement = await ethers.getContractFactory("RoninP2PTradeAgreement");
  const roninP2PTradeAgreement = await RoninP2PTradeAgreement.deploy(roninP2PFeeAndRewardDistribution.address, roninP2PFeeAndRewardDistribution.address);
  await roninP2PTradeAgreement.deployed();
  console.log("RoninP2PTradeAgreement address:", roninP2PTradeAgreement.address);

  // Step 3: Deploy RoninP2POffer
  const RoninP2POffer = await ethers.getContractFactory("RoninP2POffer");
  const roninP2POffer = await RoninP2POffer.deploy();
  await roninP2POffer.deployed();
  console.log("RoninP2POffer address:", roninP2POffer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

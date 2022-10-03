
const hre = require("hardhat");

async function main() {
  

  const ChainBattles = await hre.ethers.getContractFactory("ChainBattles");
  const chainBattles = await ChainBattles.deploy();

  await chainBattles.deployed();

  console.log("contract deployed to :" ,chainBattles.address);

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//contract deployed to : 0xa2667469b5Aa11026f56fb86AB46431CC62230A3
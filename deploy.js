const hre = require("hardhat");

async function main() {
  try {
    const votingContract = await hre.ethers.getContractFactory("Voting");
    const deployedVotingContract = await votingContract.deploy(
      ["Mark", "Mike", "Henry", "Rock"],
      10
    );
    console.log("Contract address:", deployedVotingContract.address);
  } catch (error) {
    console.error("Deployment error:", error);
  }
}

main().catch((error) => {
  console.error("Script error:", error);
  process.exitCode = 1;
});

//Contract Address deployed: 0x83f61fCDE18c18631103E05F3D8E950395BE82c0

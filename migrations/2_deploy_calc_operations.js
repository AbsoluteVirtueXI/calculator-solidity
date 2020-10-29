// Adder is an artifact of the Adder contract
const Adder = artifacts.require('Adder');
// Suber is an artifact of the Suber contract
const Suber = artifacts.require('Suber');
// Multiplier is an artifact of the Multiplier contract
const Multiplier = artifacts.require('Multiplier');
// Divisor is an artifact of the Multiplier contract
const Divisor = artifacts.require('Divisor');

module.exports = async (deployer) => {
  await deployer.deploy(Adder);
  await deployer.deploy(Suber);
  await deployer.deploy(Multiplier);
  await deployer.deploy(Divisor);
};

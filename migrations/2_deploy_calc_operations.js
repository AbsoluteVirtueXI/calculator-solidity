// Adder is an artifact of the Adder contract
const Adder = artifacts.require('Adder');
// Suber is an artifact of the Suber contract
const Suber = artifacts.require('Suber');
// Multiplier is an artifact of the Multiplier contract
const Multiplier = artifacts.require('Multiplier');
// Divisor is an artifact of the Multiplier contract
const Divisor = artifacts.require('Divisor');

module.exports = async (deployer) => {
  // All the abstractions/instances below are not needed
  // They are only useful if we need to interact with it
  // for further deployments.

  // adderInstance is an abstraction/instance of Adder
  await deployer.deploy(Adder);
  // suberInstance is an abstraction/instance of Suber
  await deployer.deploy(Suber);
  // multiplierInstance is an abstraction/instance of Multiplier
  await deployer.deploy(Multiplier);
  // divisorInstance is an abstraction/instance of Divisor
  await deployer.deploy(Divisor);
};

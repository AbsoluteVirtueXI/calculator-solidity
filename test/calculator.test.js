const { contract } = require('@openzeppelin/test-environment');

const { BN, expectRevert } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');

const Adder = contract.fromArtifact('Adder');
const Suber = contract.fromArtifact('Suber');
const Multiplier = contract.fromArtifact('Multiplier');
const Divisor = contract.fromArtifact('Divisor');
const Calculator = contract.fromArtifact('Calculator');

describe('Calculator', () => {
  beforeEach(async () => {
    this.adder = await Adder.new();
    this.suber = await Suber.new();
    this.multiplier = await Multiplier.new();
    this.divisor = await Divisor.new();
    this.calculator = await Calculator.new(
      this.adder.address,
      this.suber.address,
      this.multiplier.address,
      this.divisor.address,
    );
  });

  it('adds numbers', async () => {
    expect(await this.calculator.add(10, 11)).to.be.bignumber.equal(new BN(21));
  });

  it('substracts numbers', async () => {
    expect(await this.calculator.sub(10, 2)).to.be.bignumber.equal(new BN(8));
  });

  it('reverts when substracts nb1 - nb2 and nb1 < nb2', async () => {
    await expectRevert(this.calculator.sub(10, 22), 'Suber: no negative value here.');
  });

  it('multiplies numbers', async () => {
    expect(await this.calculator.mul(10, 2)).to.be.bignumber.equal(new BN(20));
  });

  it('divides numbers', async () => {
    expect(await this.calculator.div(10, 2)).to.be.bignumber.equal(new BN(5));
  });

  it('reverts when divides by 0', async () => {
    await expectRevert(this.calculator.div(10, 0), 'Divisor: can not divide by 0');
  });
});

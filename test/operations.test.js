const { contract } = require('@openzeppelin/test-environment');

const { BN, expectRevert } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');

const Adder = contract.fromArtifact('Adder');
const Suber = contract.fromArtifact('Suber');
const Multiplier = contract.fromArtifact('Multiplier');
const Divisor = contract.fromArtifact('Divisor');

describe('Adder', () => {
  beforeEach(async () => {
    this.adder = await Adder.new();
  });

  it('add numbers', async () => {
    expect(await this.adder.add(1, 1)).to.be.bignumber.equal(new BN(2));
  });
});

describe('Suber', () => {
  beforeEach(async () => {
    this.suber = await Suber.new();
  });

  it('substract numbers nb1 - nb2', async () => {
    expect(await this.suber.sub(100, 98)).to.be.bignumber.equal(new BN(2));
  });

  it('reverts when nb1 < nb2', async () => {
    await expectRevert(this.suber.sub(10, 22), 'Suber: no negative value here.');
  });
});

describe('Multiplier', () => {
  beforeEach(async () => {
    this.multiplier = await Multiplier.new();
  });

  it('Multiplies numbers nb1 * nb2', async () => {
    expect(await this.multiplier.mul(10, 100)).to.be.bignumber.equal(new BN(1000));
  });
});

describe('Divisor', () => {
  beforeEach(async () => {
    this.divisor = await Divisor.new();
  });
  it('Divides nb1 / nb2', async () => {
    expect(await this.divisor.div(10, 5)).to.be.bignumber.equal(new BN(2));
  });

  it('reverts when divides by 0', async () => {
    await expectRevert(this.divisor.div(10, 0), 'Divisor: can not divide by 0');
  });
});

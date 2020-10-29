// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract Suber {
    function sub(uint256 nb1, uint256 nb2) public pure returns (uint256) {
        require(nb1 >= nb2, "Suber: no negative value here.");
        return nb1 - nb2;
    }
}

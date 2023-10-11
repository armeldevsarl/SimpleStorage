// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract retrive {
    uint256 private firstvalue; // Private state variable to store an unsigned integer.

    // Function to set the value of firstvalue.
    function setFirstValue(uint256 _neoValue) public {
        firstvalue = _neoValue; // Update firstvalue with the provided _neoValue.
    }

    // Function to retrieve the current value of firstvalue.
    function getFirstValue() public view returns (uint256) {
        return firstvalue; // Return the current value of firstvalue.
    }
}

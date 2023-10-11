// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
contract  retrive {
    uint256 private firstvalue;


    function setFirstValue ( uint256  _neoValue) public {
        firstvalue= _neoValue;
    
}
    function getFirstValue() public view returns (uint256) {
        return firstvalue;
    }
}
    


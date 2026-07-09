// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Factory {

    event TokenCreated(
        address token,
        string name,
        string symbol
    );

    function createToken(
        string memory name,
        string memory symbol
    ) external {

        emit TokenCreated(address(0), name, symbol);

    }

}

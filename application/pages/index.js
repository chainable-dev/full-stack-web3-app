import {ConnectWallet, useContract, useContractRead, Web3Button} from "@thirdweb-dev/react";
import React, { useState } from "react";

// Your smart contract address here
const contractAddress = "0xB08BD1aa7Ee2291c60CE7FfcA4A070Fe2c5936F5";

export default function Home() {
  // Get the smart contract
  const { contract } = useContract(
    "0xB08BD1aa7Ee2291c60CE7FfcA4A070Fe2c5936F5"
  );

  // Read the current greeting
  const { data: currentGreeting, isLoading } = useContractRead(
    contract,
    "greet"
  );

  // Store the new greeting the user enters in the input in state
  const [newGreeting, setNewGreeting] = useState("");

  return (
    <div>


        <div
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
            <h1>Chainable Fintech Company</h1>


            <ConnectWallet accentColor="#426CB4" colorMode="dark" />


        </div>
    </div>
  );
}



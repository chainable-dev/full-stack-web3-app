import {ConnectWallet, useContract, useContractRead, Web3Button} from "@thirdweb-dev/react";
import React, { useState } from "react";
import Web3 from "web3";
import wordmark from "../public/favicon.ico";
import Torus from "@toruslabs/torus-embed";


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

    const [account, setAccount] = useState();

    const onClickLogin = async (e) => {
        e.preventDefault();

        const torus = new Torus({});
        await torus.init({
            enableLogging: false,
        });
        await torus.login();

        const web3 = new Web3(torus.provider);
        const address = (await web3.eth.getAccounts())[0];
        const balance = await web3.eth.getBalance(address);
        setAccount({ address, balance });
    };

  return (
    <div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <header >
                {account ? (
                    <div >
                        <p>
                            <strong>Address</strong>: {account.address}
                        </p>
                        <p>
                            <strong>Balance</strong>: {account.balance}
                        </p>
                    </div>
                ) : (
                    <>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p>You didn't login yet. Login to see your account details.</p>
                        <button className="App-link" onClick={onClickLogin}>
                            Login
                        </button>
                    </>
                )}
            </header>
        </div>
    </div>
  );
}



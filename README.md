<!-- Banner Image -->

![thirdweb solidity hardhat get started hero image](hero.png)

<h1 align='center'>Build an Application with Solidity, thirdweb & React</h1>

<p align='center'>This template extends from the <a href='https://replit.com/@thirdweb/Get-Started-with-Solidity-using-Hardhat-and-thirdweb-deploy'>Greeter contract template</a> by building an application on top of the smart contract.</p>

<br />

<b>Tools used in this template: </b>

- thirdweb [Typescript](https://portal.thirdweb.com/typescript) and [React](https://portal.thirdweb.com/react) SDKs to interact with our smart contract

- [Solidity](https://docs.soliditylang.org/en/v0.8.14/), [Hardhat](https://hardhat.org/), and [thirdweb deploy](https://portal.thirdweb.com/thirdweb-deploy) to develop, test, and deploy our smart contract.

_To learn more about the contract, check out [this template](https://replit.com/@thirdweb-dev/Get-Started-with-Solidity-using-Hardhat-and-thirdweb-deploy)_.

<br />

<b>Run the Application:</b>

To run the web application, change directories into `application`:

```bash
cd application
```

Then, run the development server:

```bash
npm install # Install dependencies first

npm run dev
```

Visit the application at [http://localhost:3000/](http://localhost:3000/).

<br />

<h2 align='center'>How to use this template</h2>

This template has two components:

1. The smart contract development in the [contract folder](./contract).
2. The web application in the [application folder](./application).

<h3>Deploying the contract</h3>

To deploy the `Greeter` contract, change directories into the `contract` folder:

```bash
cd contract
```

Use [thirdweb deploy](https://portal.thirdweb.com/thirdweb-deploy) to deploy the contract:

```bash
npm install # Install dependencies first
npx thirdweb deploy
```

Complete the deployment flow by clicking the generated link and using the thirdweb dashboard to choose your network and configuration.

<h3>Using Your Contract</h3>

Inside the [home page](./application/pages/index.js) of the web application, connect to your smart contract inside the [`useContract`](https://portal.thirdweb.com/react/react.usecontract#usecontract-function) hook:

```jsx
// Get the smart contract by it's address
const { contract } = useContract("0x..."); // Your contract address here (from the thirdweb dashboard)
```

We configure the desired blockchain/network in the [`_app.js`](./application/pages/_app.js) file; be sure to change this to the network you deployed your contract to.

```jsx
// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;
```

Now we can easily call the functions of our [`Greeter`](./contract/Greeter.sol) contract, such as the `greet` and `setGreeting` contract by using the [useContractData](https://portal.thirdweb.com/react/react.usecontractdata) hook to read, and the [useContractCall](https://portal.thirdweb.com/react/react.usecontractcall) hook to write data.

```jsx
// Read the current greeting
const { data: currentGreeting, isLoading } = useContractData(contract, "greet");

// Write a new greeting
const { mutate: writeGreeting, isLoading: isWriting } = useContractCall(
  contract,
  "setGreeting"
);
```

### Connecting to user wallets

To perform a "write" operation (a transaction on the blockchain), we need to have a connected wallet, so we can use their **signer** to sign the transaction.

To connect a user's wallet, we use one of thirdweb's [wallet connection hooks](https://portal.thirdweb.com/react/category/wallet-connection). The SDK automatically detects the connected wallet and uses it to sign transactions. This works because our application is wrapped in the [`ThirdwebProvider`](https://portal.thirdweb.com/react/react.thirdwebprovider), as seen in the [`_app.js`](./application/pages/_app.js) file.

## What's next?

Learn how to use thirdweb's [Contract Extensions](https://portal.thirdweb.com/thirdweb-deploy/contract-extensions) to create your own NFT Collection smart contract + application in our [next template](https://replit.com/@thirdweb/Create-an-NFT-collection-with-Solidity-thirdweb#.replit).

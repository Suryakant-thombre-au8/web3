import React, { useState, useEffect } from "react";
import ReactJson from 'react-json-view'
import { web3Connect } from "./web3connect";
import CheckBalance from "./checkBalance";
import TransactionDetails from "./transactionDetails";
import CreateAccount from "./createAccount";


function App() {
	const [blockDetails, setBlockDetails] = useState([])

	const getBlockData = async () => {
		let blockData = await web3Connect.eth.getBlockNumber().then(async blockNumber => {
			let bData = await web3Connect.eth.getBlock(blockNumber)
			const Accounts = await web3Connect.eth.getAccounts();
			console.log(Accounts);
			return bData
		})
		console.log(blockData);
		setBlockDetails(blockData)
	}




	useEffect(() => {
		getBlockData()
	}, [])


	return (
		<div className="App">
			<CreateAccount />
			<ReactJson theme='tomorrow' src={blockDetails} />
			<CheckBalance />
			<TransactionDetails />
		</div>
	);
}

export default App;

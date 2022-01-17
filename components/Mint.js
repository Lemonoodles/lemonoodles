import { useState, useEffect } from 'react';
import Button from './prebuilt/Button';
import abi from '../abis/lemonoodles.json';
import Web3 from 'web3';

const TARGET_CHAIN_ID = 1;
const CONTRACT_ADDRESS = '0x33D958140885aDf9F9AB5cF3aF2976Ad7c2a0C5D';
const WHITELIST_API = 'https://lemonoodles-whitelist.herokuapp.com/api/whitelist';

const readOnlyWeb3 = new Web3(`https://${TARGET_CHAIN_ID === 4 ? 'rinkeby' : 'mainnet'}.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`);
const web3 = new Web3();
const { toBN } = readOnlyWeb3.utils;

const PRICE_PER_MINT = toBN('35000000000000000');

const ro_contract = new readOnlyWeb3.eth.Contract(abi, CONTRACT_ADDRESS);
const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);

const switchChainRequestData = {
	method: 'wallet_switchEthereumChain',
	params: [
		{
			chainId: `0x${TARGET_CHAIN_ID.toString(16)}`,
		},
	],
};

export default function Mint() {
	const [publicActive, setPublicActive] = useState(false);
	const [preActive, setPreActive] = useState(false);
	const [mintAmount, setMintAmount] = useState(1);

	const [whitelistData, setWhitelistData] = useState({});

	const maxPublicMint = 10;

	useEffect(() => {
		if (window.ethereum) {
			web3.setProvider(window.ethereum);
			window.ethereum.on('accountsChanged', function handleAccountsChange(addresses) {
				const address = addresses[0];
				if (address) updateWhitelist(address);
			});
		}

		async function setup() {
			const address = (await web3.eth.getAccounts().catch(() => undefined))?.at(0);
			if (address) updateWhitelist(address);
		}

		async function updateSales() {
			const publicSaleState = await ro_contract.methods.publicSaleState().call();
			const preSaleState = await ro_contract.methods.whitelistSaleState().call();
			setPublicActive(publicSaleState);
			setPreActive(preSaleState);
		}
		updateSales();
		setup();
		setInterval(updateSales, 1000);
	}, []);

	const connect = async () => {
		if (!window.ethereum) {
			alert('You need to use a web3 enabled browser or an extension that adds web3 functionality!');
			return [false, undefined];
		}
		return window.ethereum
			.request(switchChainRequestData)
			.then(async () => {
				const address = (await web3.eth.requestAccounts()).at(0);
				return [true, address];
			})
			.catch(() => [false, undefined]);
	};

	const updateWhitelist = async (address) => {
		if (!address) return;
		if (publicActive) return;
		const response = await fetch(`${WHITELIST_API}?address=${address}`, {
			method: 'GET',
		});
		if (response.ok) {
			setWhitelistData(await response.json());
			setMintAmount(whitelistData.maxMints > 0 ? 1 : 0);
			return;
		} else {
			setWhitelistData({ maxMints: 0 });
			setMintAmount(0);
		}
	};

	const maxAmountPublic = (value) => {
		value = parseInt(value); // To avoid `-`
		setMintAmount(isNaN(value) ? 0 : value);
		if (value > maxPublicMint) {
			setMintAmount(maxPublicMint);
		} else if (value < 0) {
			setMintAmount(1);
		}
	};

	const maxAmountPre = (value) => {
		value = parseInt(value); // To avoid `-`
		setMintAmount(isNaN(value) ? 0 : value);
		if (value > whitelistData.maxMints) {
			setMintAmount(whitelistData.maxMints);
		} else if (value < 0) {
			setMintAmount(1);
		}
	};

	const preSaleMint = async () => {
		if (!(parseInt(mintAmount) > 0)) return;
		const { signature, maxMints } = whitelistData;
		if (maxMints == 0) return;

		const [connected, address] = await connect();
		if (!connected || !address) return;

		const TX = contract.methods.whitelistMint(mintAmount, maxMints, signature);
		const params = { from: address, value: toBN(mintAmount).mul(PRICE_PER_MINT) };
		try {
			const gasEstimation = Math.floor((await TX.estimateGas(params)) * 1.3);
			contract.methods.whitelistMint(mintAmount, maxMints, signature).send({ ...params, gas: gasEstimation });
		} catch (e) {
			console.error(e);
			const errorMessage = e.toString().match(/execution reverted: [a-z ]+/i);
			alert(errorMessage ?? e?.message);
		}
	};

	const publicSaleMint = async () => {
		if (!(parseInt(mintAmount) > 0)) return;
		const [connected, address] = await connect();
		if (!connected || !address) return;

		const TX = contract.methods.publicMint(mintAmount);
		const params = { from: address, value: toBN(mintAmount).mul(PRICE_PER_MINT) };
		try {
			const gasEstimation = Math.floor((await TX.estimateGas(params)) * 1.5);
			contract.methods.publicMint(mintAmount).send({ ...params, gas: gasEstimation });
		} catch (e) {
			const errorMessage = e.toString().match(/execution reverted: [a-z ]+/i);
			alert(errorMessage ?? e?.message);
			console.error(e);
		}
	};

	return (
		<>
			{publicActive ? (
				<>
					<div className="md:grid-cols-2 grid gap-4">
						<div className="flex-center relative flex-col">
							<div className="bg-yellow-400 shadow"></div>
							<input
								className="bg-lemon font-mont rounded-xl relative w-full h-12 text-2xl font-bold text-center text-black border-2 border-black border-solid"
								name="Public Sale"
								type="number"
								min="1"
								max={maxPublicMint}
								maxLength="2"
								onChange={(e) => maxAmountPublic(e.target.value)}
								defaultValue="1"
								value={mintAmount}
							/>
						</div>
						<div className="w-full">
							<Button onClick={publicSaleMint} text="MINT" />
						</div>
					</div>
					<div className="flex-center flex-col mt-6">
						<p className="font-bold uppercase">Max Mints Per Transaction are {maxPublicMint}</p>
					</div>
				</>
			) : preActive ? (
				<>
					<div className="md:grid-cols-2 grid gap-4">
						<div className="flex-center relative flex-col">
							<div className="bg-yellow-400 shadow"></div>
							<input
								className="bg-lemon font-mont rounded-xl relative w-full h-12 text-2xl font-bold text-center text-black border-2 border-black border-solid"
								name="Pre-Sale"
								type="number"
								min="1"
								max={whitelistData.maxMints}
								maxLength="2"
								onChange={(e) => maxAmountPre(e.target.value)}
								defaultValue="1"
								value={mintAmount}
							/>
						</div>
						<div className="w-full">
							<Button onClick={preSaleMint} text="MINT" />
						</div>
					</div>
					<div className="flex-center flex-col mt-6">
						<p className="font-bold uppercase">
							{whitelistData.maxMints > 0 ? `Your Max Mint${whitelistData.maxMints > 1 ? 's' : ''} are ${whitelistData.maxMints}` : `You are not whitelisted!`}
						</p>
					</div>
				</>
			) : (
				<></>
			)}
		</>
	);
}

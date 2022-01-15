import { useState, useEffect } from 'react';
import Button from './prebuilt/Button';
import abi from '../abis/lemondoodles.json';
import Web3 from 'web3';

const readOnlyWeb3 = new Web3(`https://${TARGET_CHAIN_ID === 4 ? 'rinkeby' : 'mainnet'}.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`);
const web3 = new Web3();
const { toBN } = readOnlyWeb3.utils;

const TARGET_CHAIN_ID = 4;
const CONTRACT_ADDRESS = '0x33A355eBb7561df09Bce367054190F44D2672DF6';
const WHITELIST_API = 'https://lemondoodles-whitelist.herokuapp.com/api/whitelist';
const PRICE_PER_MINT = toBN('35').mul(toBN(10).pow(toBN(15)));

const ro_contract = new readOnlyWeb3.eth.Contract(abi, CONTRACT_ADDRESS);
const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);

export default function Mint() {
	const [publicActive, setPublicActive] = useState(false);
	const [preActive, setPreActive] = useState(true);
	const [mintAmount, setMintAmount] = useState(1);

	const [whitelistData, setWhitelistData] = useState({});

	const maxPublicMint = 10;

	const updateWhitelist = async (address) => {
		if (!address) return;
		const response = await fetch(`${WHITELIST_API}?address=${address}`, {
			method: 'GET',
		});
		if (response.ok) {
			setWhitelistData(await response.json());
			return;
		} else setWhitelistData({});
	};

	useEffect(() => {
		if (window.ethereum) {
			web3.setProvider(window.ethereum);
			window.ethereum.on('accountsChanged', function handleAccountsChange(addresses) {
				const address = addresses[0];
				if (address) updateWhitelist(address);
			});
		}
		async function setup() {
			// const publicSaleState = ro_contract.methods.publicSaleState().call();
			// const preSaleState = ro_contract.methods.whitelistSaleState().call();
			// setPublicActive(publicSaleState);
			// setPreActive(preSaleState);

			const address = (await web3.eth.getAccounts())[0];
			if (address) updateWhitelist(address);
		}
		setup();
	}, []);

	const maxAmountPublic = (value) => {
		value = parseInt(value); // To avoid `-`
		setMintAmount(value);
		if (value > maxPublicMint || value.length > 3) {
			setMintAmount(maxPublicMint);
		} else if (value < 0) {
			setMintAmount(1);
		}
	};

	const maxAmountPre = (value) => {
		value = parseInt(value); // To avoid `-`
		setMintAmount(value);
		if (value > whitelistData.maxMints || value.length > 3) {
			setMintAmount(whitelistData.maxMints);
		} else if (value < 0) {
			setMintAmount(1);
		}
	};

	const preSaleMint = async () => {
		console.log(`Presale mint`);
	};

	const publicSaleMint = async () => {
		console.log(`Public mint`);
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

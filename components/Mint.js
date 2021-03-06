import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "./prebuilt/Button";
import abi from "../abis/lemonoodles.json";
import Web3 from "web3";

const TARGET_CHAIN_ID = 1;
const CONTRACT_ADDRESS = "0x33D958140885aDf9F9AB5cF3aF2976Ad7c2a0C5D";
const WHITELIST_API =
	"https://lemonoodles-whitelist.herokuapp.com/api/whitelist";

const readOnlyWeb3 = new Web3(
	`https://${
		TARGET_CHAIN_ID === 4 ? "rinkeby" : "mainnet"
	}.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`
);
const web3 = new Web3();
const { toBN } = readOnlyWeb3.utils;

const PRICE_PER_MINT = toBN("35000000000000000");

const ro_contract = new readOnlyWeb3.eth.Contract(abi, CONTRACT_ADDRESS);
const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);

const switchChainRequestData = {
	method: "wallet_switchEthereumChain",
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
	const [address, setAddress] = useState(undefined);
	const [whitelistData, setWhitelistData] = useState({});

	const [totalMinted, setTotalMinted] = useState(0);

	const maxPublicMint = 10;

	useEffect(() => {
		if (window.ethereum) {
			window.ethereum.on(
				"accountsChanged",
				function handleAccountsChange(addresses) {
					updateWhitelist(addresses[0]);
				}
			);
		}

		async function setup() {
			if (!window.ethereum) return;
			const address = (await web3.eth.getAccounts().catch(() => undefined))?.at(
				0
			);
			updateWhitelist(address);
		}

		async function updateSales() {
			const totalSupply = await ro_contract.methods.totalSupply().call();
			const publicSaleState = await ro_contract.methods
				.publicSaleState()
				.call();
			const preSaleState = await ro_contract.methods
				.whitelistSaleState()
				.call();
			setTotalMinted(totalSupply);
			setPublicActive(publicSaleState);
			setPreActive(preSaleState);
		}
		updateSales();
		setup();
		setInterval(updateSales, 1000);
	}, []);

	const connect = async () => {
		try {
			if (!window.ethereum) {
				toast.error(
					"You need to use a web3 enabled browser or an extension that adds web3 functionality!"
				);
				return [false, undefined];
			}
			web3.setProvider(window.ethereum);
			const chainId = await web3.eth.getChainId();
			if (chainId !== TARGET_CHAIN_ID) {
				toast.error("You need to connect to the ethereum mainnet!");
				return [false, undefined];
			}
			const [address] = await web3.eth.requestAccounts();
			updateWhitelist(address);
			return [true, address];
		} catch (e) {
			console.error(e);
			toast.error(e);
		}
	};

	const updateWhitelist = async (address) => {
		address =
			typeof address === "string"
				? web3.utils.isAddress(address)
					? web3.utils.toChecksumAddress(address)
					: undefined
				: undefined;
		if (!address) return setAddress(undefined);
		setAddress(address);
		if (publicActive) return;
		const response = await fetch(`${WHITELIST_API}?address=${address}`, {
			method: "GET",
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
		const params = {
			from: address,
			value: toBN(mintAmount).mul(PRICE_PER_MINT),
		};
		try {
			const gasEstimation = Math.floor((await TX.estimateGas(params)) * 1.3);
			contract.methods
				.whitelistMint(mintAmount, maxMints, signature)
				.send({ ...params, gas: gasEstimation });
		} catch (e) {
			console.error(e);
			const errorMessage = e.toString().match(/execution reverted: [a-z ]+/i);
			toast.error(errorMessage ?? e?.message);
		}
	};

	const publicSaleMint = async () => {
		if (!(parseInt(mintAmount) > 0)) return;
		const [connected, address] = await connect();
		if (!connected || !address) return;

		const TX = contract.methods.publicMint(mintAmount);
		const params = {
			from: address,
			value: toBN(mintAmount).mul(PRICE_PER_MINT),
		};
		try {
			const gasEstimation = Math.floor((await TX.estimateGas(params)) * 1.5);
			contract.methods
				.publicMint(mintAmount)
				.send({ ...params, gas: gasEstimation });
		} catch (e) {
			const errorMessage = e.toString().match(/execution reverted: [a-z ]+/i);
			toast.error(errorMessage ?? e?.message);
			console.error(e);
		}
	};

	return (
		<>
			{address === undefined ? (
				<div>
					<Button onClick={() => connect()} text='Connect Wallet' />
					{/* <div onClick={connect} className="hover:scale-105 relative z-40 transition-all duration-300">
						<span className="bg-green-600 shadow"></span>
						<button className="btn">Connect Wallet</button>
					</div> */}
				</div>
			) : (
				<>
					{publicActive ? (
						<>
							<div className='md:grid-cols-2 grid gap-4'>
								<div className='flex-center relative flex-col'>
									<div className='bg-yellow-400 shadow'></div>
									<input
										className='bg-lemon font-mont rounded-xl relative w-full h-12 text-2xl font-bold text-center text-black border-2 border-black border-solid'
										name='Public Sale'
										type='number'
										min='1'
										max={maxPublicMint}
										maxLength='2'
										onChange={(e) => maxAmountPublic(e.target.value)}
										defaultValue='1'
										value={mintAmount}
									/>
								</div>
								<div className='w-full'>
									<Button onClick={() => publicSaleMint()} text='MINT' />
								</div>
							</div>
							<div className='flex-center md:flex-row flex-col gap-4 mt-6'>
								<h2 className='outline-text md:!mb-0 !mb-2'>
									<span className='text-lemon'>
										{(0.035 * mintAmount).toFixed(3)}
									</span>{" "}
									ETH
								</h2>
								<h2 className='outline-text'>
									<span className='text-mint'>{totalMinted}</span>/
									<span className='text-mint'>7,777</span> Minted
								</h2>
							</div>
							<div className='flex-center flex-col mt-6'>
								<p className='outline-text font-skrap !text-4xl uppercase'>
									Max Mints Per Transaction are {maxPublicMint}
								</p>
							</div>
						</>
					) : preActive ? (
						<>
							<div className='md:grid-cols-2 grid gap-4 pt-6'>
								{whitelistData.maxMints > 0 ? (
									<>
										<div className='flex-center relative flex-col'>
											<div className='bg-yellow-400 shadow'></div>
											<input
												className='bg-lemon font-mont rounded-xl relative w-full h-12 text-2xl font-bold text-center text-black border-2 border-black border-solid'
												name='Pre-Sale'
												type='number'
												min='1'
												max={whitelistData.maxMints}
												maxLength='2'
												onChange={(e) => maxAmountPre(e.target.value)}
												defaultValue='1'
												value={mintAmount}
											/>
										</div>
										<div className='w-full'>
											<Button onClick={() => preSaleMint()} text='MINT' />
										</div>
									</>
								) : (
									<></>
								)}
							</div>
							<div className='flex-center md:flex-row flex-col gap-4 mt-6'>
								<h2 className='outline-text md:!mb-0 !mb-2'>
									<span className='text-lemon'>
										{(0.035 * mintAmount).toFixed(3)}
									</span>{" "}
									ETH
								</h2>
								<h2 className='outline-text'>
									<span className='text-mint'>{totalMinted}</span>/
									<span className='text-mint'>7,777</span> Minted
								</h2>
							</div>
							<div className='flex-center flex-col mt-6'>
								<p className='outline-text font-skrap !text-4xl uppercase'>
									{whitelistData.maxMints > 0
										? `Your Max Mint${
												whitelistData.maxMints > 1 ? "s" : ""
										  } are ${whitelistData.maxMints}`
										: `You are not whitelisted!`}
								</p>
							</div>
						</>
					) : (
						<>
							<div>
								<Button text='Minting Resumes Jan 24th 7PM EST!' />
							</div>
						</>
					)}
				</>
			)}
			<ToastContainer
				position='bottom-right'
				autoClose={5000}
				newestOnTop={false}
				hideProgressBar={false}
				pauseOnHover
				closeOnClick
				theme='colored'
			/>
		</>
	);
}

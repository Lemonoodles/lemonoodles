import { useState } from "react";
import Button from "./prebuilt/Button";

export default function Mint() {
	const [preActive, setPreActive] = useState(false);
	const maxPublicMint = 10;
	const maxPreMint = 5;
	const [mintAmount, setMintAmount] = useState(1);

	const maxAmountPublic = (value) => {
		setMintAmount(value);
		if (value > maxPublicMint || value.length > 3) {
			setMintAmount(maxPublicMint);
		} else if (value < 0) {
			setMintAmount(1);
		}
	};

	const maxAmountPre = (value) => {
		setMintAmount(value);
		if (value > maxPreMint || value.length > 3) {
			setMintAmount(maxPreMint);
		} else if (value < 0) {
			setMintAmount(1);
		}
	};

	return (
		<>
			{preActive ? (
				<>
					<div className='md:grid-cols-2 grid gap-4'>
						<div className='flex-center relative flex-col'>
							<div className='bg-yellow-400 shadow'></div>
							<input
								className='bg-lemon font-mont rounded-xl relative w-full h-12 text-2xl font-bold text-center text-black border-2 border-black border-solid'
								name='Pre-Sale'
								type='number'
								min='1'
								max={maxPreMint}
								maxLength='2'
								onChange={(e) => maxAmountPre(e.target.value)}
								defaultValue='1'
								value={mintAmount}
							/>
						</div>
						<div className='w-full'>
							<Button text='MINT' />
						</div>
					</div>
					<div className='flex-center flex-col mt-6'>
						<p className='font-bold uppercase'>Max Mint is {maxPreMint}</p>
					</div>
				</>
			) : (
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
							<Button text='MINT' />
						</div>
					</div>
					<div className='flex-center flex-col mt-6'>
						<p className='font-bold uppercase'>Max Mint is {maxPublicMint}</p>
					</div>
				</>
			)}
		</>
	);
}

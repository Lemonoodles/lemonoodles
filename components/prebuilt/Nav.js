import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "./Modal";
import Button from "./Button";
import Social from "./Social";

export default function Nav({ links, position }) {
	return (
		<>
			{/* Mobile Nav */}
			<div className='top-4 left-4 fixed z-50'>
				<div className='md:hidden block text-4xl'>
					<Modal
						btnTextOpen={<AiOutlineClose />}
						btnTextClose={<BiMenu />}
						btnClass='hover:text-red-500 fixed'
					>
						<div className='flex flex-col'>
							{links && (
								<>
									{links.map((link) => (
										<a
											className='nav-link text-white'
											href={`#${link.toLowerCase()}`}
											key={link}
										>
											{link}
										</a>
									))}
								</>
							)}
						</div>
					</Modal>
				</div>
			</div>

			{/* Desktop Nav */}
			<div
				className={`${
					position ? position : "relative"
				} top-0 left-0 md:flex hidden gap-4 w-full z-50 p-4`}
			>
				<div className='relative z-10 w-full'>
					<div className='bg-yellow-500 shadow'></div>
					<div className='bg-lemon rounded-xl relative z-10 flex flex-row justify-between w-full h-full p-4 border-2 border-black border-solid'>
						<div className='flex-center'>
							<span className='font-skrap mb-0 text-4xl'>LEMON NOODLES</span>
						</div>
						{links && (
							<>
								{links.map((link) => (
									<a
										className='nav-link text-black'
										href={`#${link.toLowerCase()}`}
										key={link}
									>
										{link}
									</a>
								))}
							</>
						)}
						<div className='flex-center flex-row gap-4'>
							<Social />
							<div className='flex flex-col items-end justify-center'>
								<Button text='Connect Wallet' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "./Modal";
import Button from "./Button";

export default function Nav({ links, position }) {
	return (
		<div className='container'>
			<div
				className={`${
					position ? position : "relative"
				} top-0 left-0 flex flex-row items-center justify-between w-full p-6`}
			>
				{/* Mobile Nav */}
				<div className='md:hidden block text-4xl'>
					<Modal
						btnTextOpen={<AiOutlineClose />}
						btnTextClose={<BiMenu />}
						btnClass='hover:text-red-500 fixed'
					>
						<div className='flex flex-col'>
							{links.map((link) => (
								<a
									className='hover:text-red-500 text-white transition-all duration-300'
									href={`#${link.toLowerCase()}`}
									key={link}
								>
									{link}
								</a>
							))}
						</div>
					</Modal>
				</div>

				{/* Desktop Nav */}
				<div className='relative z-10 w-full'>
					<div className='bg-yellow-500 shadow'></div>
					<div className='md:grid bg-lemon relative items-center hidden w-full grid-cols-3 gap-4 px-6 py-4 border-2 border-black border-solid rounded-full'>
						<div>
							<span className='font-skrap text-4xl'>Lemon Doodles</span>
						</div>
						<div className='flex-center flex-row gap-4'>
							{links.map((link) => (
								<a
									className='font-skrap text-2xl text-black transition-all duration-300'
									href={`#${link.toLowerCase()}`}
									key={link}
								>
									{link}
								</a>
							))}
						</div>
						<div className='flex flex-col items-end justify-center'>
							<Button text='Connect Wallet' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

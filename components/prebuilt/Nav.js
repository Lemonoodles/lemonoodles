import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "./Modal";
import Image from "next/image";
import Button from "./Button";
import Social from "./Social";
import logo from "../../public/logo.png";

export default function Nav({ links, position }) {
	return (
		<>
			{/* Mobile Nav
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
			</div> */}

			{/* Desktop Nav */}
			<div
				className={`${
					position ? position : "relative"
				} top-0 left-0 md:flex hidden gap-4 w-full justify-between z-50 py-4 px-6`}
			>
				<div className='flex-center max-w-[15rem]'>
					{/* <Image src={logo} alt='LemonNoodles' /> */}
					<span className='font-skrap lg:text-5xl text-4xl outline-text-hd !text-lemon'>
						Citrus Kids
					</span>
					{/* <span className='font-skrap mb-0 text-4xl'>LEMON NOODLES</span> */}
				</div>
				<div className='relative z-10'>
					<div className='bg-yellow-500 shadow'></div>
					<div className='bg-lemon rounded-xl relative z-10 flex flex-row justify-between w-full h-full p-4 border-2 border-black border-solid'>
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
							{/* <div className='flex flex-col items-end justify-center'>
								<Button text='Connect Wallet' />
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

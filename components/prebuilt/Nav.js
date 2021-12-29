import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "./Modal";

export default function Nav({ links, position }) {
	return (
		<>
			<div
				className={`${position} top-0 left-0 flex flex-row items-center justify-between w-full p-6`}
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
				<div className='md:flex flex-row hidden gap-4'>
					{links.map((link) => (
						<a
							className='hover:text-red-500 text-black transition-all duration-300'
							href={`#${link.toLowerCase()}`}
							key={link}
						>
							{link}
						</a>
					))}
				</div>
			</div>
		</>
	);
}

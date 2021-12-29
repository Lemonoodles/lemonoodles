import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Accordian({ children, title }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className={`relative w-full mx-auto mb-5 last:mb-0`}>
				<div className='accordian' onClick={() => setIsOpen(!isOpen)}>
					<h3 className='text-xl font-bold'>{title}</h3>
					<button
						className='right-5 absolute'
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <FaMinus /> : <FaPlus />}
					</button>
				</div>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, y: -5 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -5 }}
							className='accordian-content'
						>
							{children}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
}

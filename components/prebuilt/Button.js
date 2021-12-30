import Link from "next/link";

export default function Button({ link, text }) {
	return (
		<>
			{link ? (
				<div className='relative -mt-[0.3em]'>
					<span className='bg-green-600 shadow'></span>
					<Link href={link} passHref className='btn'>
						{text}
					</Link>
				</div>
			) : (
				<div className='relative -mt-[0.3em]'>
					<span className='bg-green-600 shadow'></span>
					<button className='btn'>{text}</button>
				</div>
			)}
		</>
	);
}

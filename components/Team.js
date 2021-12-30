import Image from "next/image";

import nft from "../public/doodle.png";

const Member = ({ img, name, position }) => {
	return (
		<>
			<div className='flex-center flex-col'>
				<div className='member'>
					<Image src={img} alt={name} />
				</div>
				<h3>{name}</h3>
				<p>{position}</p>
			</div>
		</>
	);
};

export default function Team() {
	return (
		<>
			<div className='lg:grid-cols-3 md:grid-cols-2 grid gap-12'>
				<Member name='Zayne' position='Web Dev' img={nft} />
				<Member name='Zayne' position='Web Dev' img={nft} />
				<Member name='Zayne' position='Web Dev' img={nft} />
				<Member name='Zayne' position='Web Dev' img={nft} />
				<Member name='Zayne' position='Web Dev' img={nft} />
				<Member name='Zayne' position='Web Dev' img={nft} />
			</div>
		</>
	);
}

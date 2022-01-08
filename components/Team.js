import Image from "next/image";

import juice from "../public/team/juice.jpg";
import lacroix from "../public/team/lacroix.jpg";
import astro from "../public/team/astrolemon.jpg";
import phantom from "../public/team/phantom.jpg";
import cat from "../public/team/cat.jpg";
import darth from "../public/team/lemonator.jpg";
import lib from "../public/team/libertiye.jpg";

const Member = ({ img, name, position }) => {
	return (
		<>
			<div className='flex-center flex-col'>
				<div className='member lg:w-3/4'>
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
			<div className='lg:grid-cols-3 sm:grid-cols-2 grid gap-8'>
				<Member name='JUICE' position='Co-Creator' img={juice} />
				<Member name='Lemon LaCroix' position='Co-Creator' img={lacroix} />
				<Member name='astrolemon' position='Co-Creator' img={astro} />
				<Member name='Phantom' position='Web Dev' img={phantom} />
				<Member name='DisguisedCat' position='Dev' img={cat} />
				<Member name='Libertiye' position='Artist' img={lib} />
				<Member name='E-lemonator' position='Community Builder' img={darth} />
			</div>
		</>
	);
}

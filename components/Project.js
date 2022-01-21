import Carousel from "./prebuilt/Carousel";

export default function Project() {
	return (
		<>
			<div className=' grid grid-cols-1 gap-8'>
				<div className='flex-center flex-col'>
					<div className='text-center'>
						<h2 className='outline-text-hd'>Project Description</h2>
						<p className=''>
							Citrus Kids is an NFT collection of unique, programmatically
							generated friends with 200 unique traits and over 700 Million
							potential combinations. Each Citrus Kid grants holders access to a
							super exclusive, super secret clubhouse where the members decide
							the direction and future of the project. Citrus Kids believes we
							are stronger together and aspires to let that shine through in our
							Community!
						</p>
					</div>
				</div>
				<div className='flex-center w-full'>
					<Carousel />
				</div>
			</div>
		</>
	);
}

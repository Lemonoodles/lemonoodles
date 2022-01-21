import Carousel from "./prebuilt/Carousel";

export default function Project() {
	return (
		<>
			<div className=' grid grid-cols-1 gap-8'>
				<div className='flex-center flex-col'>
					<div className='text-center'>
						<h2 className='outline-text-hd'>Project Description</h2>
						<p className=''>
							Lemonoodles are a NFT collection of unique, programmatically
							generated frens inspired by Little Lemon Friends and Doodles. We
							like the lemons and we like the doodles. Turns out they liked each
							other too. These are their love children and a story of forbidden
							love. Note, the art for Lemonoodles is completely our own and is
							only inspired by and not affiliated with Doodles or Little Lemon
							Friends.
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

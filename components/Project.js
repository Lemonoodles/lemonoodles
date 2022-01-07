import Carousel from "./prebuilt/Carousel";

export default function Project() {
	return (
		<>
			<div className='lg:grid-cols-2 grid gap-8'>
				<div className='flex-center flex-col'>
					<div>
						<h2 className='text-left'>Project Description</h2>
						<p>
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
				<div className='flex-center'>
					<Carousel />
				</div>
			</div>
		</>
	);
}

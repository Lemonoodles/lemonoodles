import Image from "next/image";
import Meta from "../components/Meta";
import Wrapper from "../components/prebuilt/Wrapper";
import Nav from "../components/prebuilt/Nav";
import Mint from "../components/Mint";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Project from "../components/Project";
import Origin from "../components/Origin";
import Lemonbg from "../components/Lemonbg";
import Footer from "../components/Footer";

import doodle from "../public/doodle.jpg";
import logo from "../public/logo.png";

export default function Home() {
	return (
		<>
			<Meta
				title='LemonNoodles - 7,777 Supply'
				desc='7,777 LemonNoodles on the ETH chain'
			/>
			<Lemonbg />
			<Nav position='fixed' />
			<div className='md:py-0 container px-8 py-32'>
				<div className='md:grid-cols-2 md:h-screen grid gap-12'>
					<div className='flex-center flex-col'>
						<div className='img w-3/4 mx-auto'>
							<Image src={doodle} alt='Lemon Doodle' />
						</div>
					</div>
					<div className='flex-center flex-col'>
						<div>
							<Image src={logo} alt='Lemon Noodles NFT' />
							{/* <h1 className='font-skrap mb-6 text-6xl text-black'>
								LEMON NOODLES
							</h1> */}
							<p className='mx-auto text-2xl text-center'>
								7,777 NFTs - 0.035 ETH
							</p>
							<Mint />
						</div>
					</div>
				</div>
			</div>

			<Wrapper>
				<Project />
			</Wrapper>

			<Wrapper className='bg-lemon'>
				<Origin />
			</Wrapper>

			<Wrapper className=''>
				<Team />
			</Wrapper>

			<Wrapper className='bg-mint'>
				<FAQ />
			</Wrapper>

			<Footer />
		</>
	);
}

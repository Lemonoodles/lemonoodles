import Image from "next/image";
import Meta from "../components/Meta";
import Wrapper from "../components/prebuilt/Wrapper";
import Nav from "../components/prebuilt/Nav";
import Mint from "../components/Mint";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Project from "../components/Project";
// import Origin from "../components/Origin";
import Lemonbg from "../components/Lemonbg";
import Footer from "../components/Footer";

import five from "../public/five.jpg";
import logo from "../public/citrus-logo.png";

export default function Home() {
	return (
		<>
			<Meta
				title='Citrus Kids - 7,777 Supply'
				desc='7,777 Citrus Kids on the ETH chain'
			/>
			<Lemonbg />
			<Nav position='fixed' />
			<div className='lg:py-0 container px-8 py-32'>
				<div className='lg:grid-cols-2 lg:h-screen grid gap-12'>
					<div className='flex-center flex-col'>
						<div className='mx-auto'>
							<Image src={logo} alt='Lemonoodle' />
						</div>
					</div>
					<div className='flex-center flex-col'>
						<div>
							<h1 className='outline-text-hd !text-lemon'>Citrus Kids</h1>
							{/* <div className='max-w-max mx-auto'>
								<Image src={logo} alt='Lemonoodles NFT' />
							</div> */}
							<p className='outline-text font-skrap mx-auto !mb-6 text-6xl text-center'>
								0.035 ETH Each
							</p>
							<Mint />
						</div>
					</div>
				</div>
			</div>

			<Wrapper>
				<Project />
			</Wrapper>

			{/* <Wrapper className='bg-lemon'>
				<Origin />
			</Wrapper> */}

			<Wrapper className='bg-lemon'>
				<Team />
			</Wrapper>

			<Wrapper className='bg-mint'>
				<FAQ />
			</Wrapper>

			<Footer />
		</>
	);
}

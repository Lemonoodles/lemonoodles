// import Meta from "../components/Meta";
import Wrapper from "../components/prebuilt/Wrapper";
import Fade from "../components/Fade";

export default function Home() {
	return (
		<>
			{/* <Meta title='Title' desc='Descrition' /> */}
			<Wrapper>
				<Fade bottom>
					<div className='h-screen text-5xl font-bold text-white'>Hello</div>
				</Fade>

				<Fade bottom>
					<div className='h-screen text-5xl font-bold text-white bg-red-400'>
						Hello
					</div>
				</Fade>

				<Fade bottom>
					<div className='h-screen text-5xl font-bold text-white'>Hello</div>
				</Fade>

				<Fade bottom>
					<div className='h-screen text-5xl font-bold text-white'>Hello</div>
				</Fade>

				<Fade bottom>
					<div className='h-screen text-5xl font-bold text-white'>Hello</div>
				</Fade>
			</Wrapper>
		</>
	);
}

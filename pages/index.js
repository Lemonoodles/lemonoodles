// import Meta from "../components/Meta";
import Wrapper from "../components/prebuilt/Wrapper";
import Nav from "../components/prebuilt/Nav";

export default function Home() {
	return (
		<>
			{/* <Meta title='Title' desc='Descrition' /> */}
			<Nav links={["Mint", "About", "Types", "Team"]} />
			<Wrapper></Wrapper>
		</>
	);
}

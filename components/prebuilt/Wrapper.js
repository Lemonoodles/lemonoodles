export default function Wrapper(props) {
	return (
		<>
			<div className={`w-full py-32 px-12 md:px-0 ${props.className}`}>
				<div className='container w-full h-full'>{props.children}</div>
			</div>
		</>
	);
}

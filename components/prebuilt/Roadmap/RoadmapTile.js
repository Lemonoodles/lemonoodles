export default function RoadmapTile({
	children,
	title,
	number,
	done,
	current,
}) {
	return (
		<>
			<div className={`roadmap group bg-black text-white`}>
				{number && (
					<h4
						className={`group group-hover:text-green-300 roadmap-number ${
							done && "!text-gray-400"
						}`}
					>
						{number}
					</h4>
				)}
				<div
					className={`group ml-6 flex flex-col justify-center ${
						done && "line-through decoration-white decoration-2"
					}`}
				>
					{title && <h3>{title}</h3>}
					{children}
				</div>

				<div
					className={`-left-3 w-6 aspect-square absolute bg-white shadow-md rounded-full ${
						done && "bg-gray-400"
					}`}
				>
					<div
						className={
							current
								? "w-full h-full absolute done animate-ping aspect-square rounded-full bg-white"
								: "hidden"
						}
					></div>
				</div>
			</div>
		</>
	);
}

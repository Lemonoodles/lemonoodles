export default function TimeHide({ date, before, after }) {
	return (
		<>
			{Date.parse(new Date()) <= Date.parse(date) ? (
				<>{before}</>
			) : (
				<>{after}</>
			)}
		</>
	);
}

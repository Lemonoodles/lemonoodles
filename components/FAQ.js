import Accordian from "./prebuilt/Accordian";

export default function FAQ() {
	return (
		<>
			<div>
				<Accordian title='How many Citrus Kids are there?'>
					<p>7,777</p>
				</Accordian>
				<Accordian title='Will there be rarity?'>
					<p>
						The Citrus Kids are generated from 200 traits with varying degrees
						of rarity. Combinations of those traits and rarities will determine
						the ranking of each Kid
					</p>
				</Accordian>
				<Accordian title='Wen Mint?'>
					<p>Mint will resume Monday, January 24th at 3PM EST</p>
				</Accordian>
				<Accordian title='How much is a Citrus Kid?'>
					<p>0.035 ETH + gas</p>
				</Accordian>
				<Accordian title="What's the mint limit per transaction/wallet for Public sale?">
					<p>Max of 10 Citrus Kids per transaction.</p>
				</Accordian>
				<Accordian title='Is there a launch roadmap?'>
					<p>
						We're all about being chill here. Unlike other projects we're not
						really into creating artificial hype, promising the world, and then
						delivering nothing! We have a capable team that can build almost
						anything imaginable!
					</p>
					<p>
						We already have a track record of involving the Citrus Kids
						Community in major decisions for the project. We intend to keep it
						that way!!
					</p>
				</Accordian>
				<Accordian title='What commercial rights do I have to my Citrus Kid?'>
					<p>
						You are free to do whatever you want with your Citrus Kid!! The IP
						is yours!!
					</p>
					<p>
						Citrus Kids are in the Public Domain. To the extent possible under
						law, we have waived all copyright and related or neighboring rights
						to Citrus Kids. We believe that by releasing the works under CC0 we
						allow the community to freely build upon, enhance and reuse the
						works for any purposes without fear or restriction under copyright
						and database law
					</p>
				</Accordian>
			</div>
		</>
	);
}

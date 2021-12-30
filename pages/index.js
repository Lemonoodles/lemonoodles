// import Meta from "../components/Meta";
import Wrapper from "../components/prebuilt/Wrapper";
import Nav from "../components/prebuilt/Nav";
import Image from "next/image";
import doodle from "../public/doodle.png";
import Button from "../components/prebuilt/Button";

export default function Home() {
	return (
		<>
			{/* <Meta title='Title' desc='Descrition' /> */}
			<Nav links={["Mint", "About", "Types", "Team"]} />
			<Wrapper>
				<div className='flex-center flex-col text-center h-[65vh]'>
					<div>
						<div className='img lg:w-1/2 mx-auto mb-6'>
							<Image src={doodle} alt='Lemon Doodle' />
						</div>
						<h1 className='font-skrap mb-6 text-6xl text-black'>
							LEMON DOODLES
						</h1>
						<p className='mb-8'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni a
							architecto alias? Et rem voluptatibus eos adipisci dolores beatae,
							deserunt assumenda, magnam labore veritatis culpa?
						</p>
						<Button text='mint now' />
					</div>
				</div>
			</Wrapper>

			<Wrapper className='bg-lemon'>
				<div className='lg:grid-cols-2 grid gap-20 mt-16'>
					<div className='img flex-center lg:flex-col flex-col mx-auto'>
						<div className='lg:w-1/2'>
							<div className='-rotate-6 lg:m-0 -mt-24 -mr-12 transform'>
								<Image src={doodle} alt='Lemon Doodle' />
							</div>
							<div className='-rotate-12 transform'>
								<Image src={doodle} alt='Lemon Doodle' />
							</div>
							<div className='rotate-12 lg:m-0 mt-24 -ml-12'>
								<Image src={doodle} alt='Lemon Doodle' />
							</div>
						</div>
					</div>
					<div className='flex-center lg:text-left flex-col text-center'>
						<div>
							<h2 className='font-skrap mb-8 text-6xl text-black'>
								THE ORIGIN
							</h2>
							<p>
								On a distant lemon shaped planet far far away from earth there
								was a giant lemon tree with little lemon inhabitants.
							</p>
							<p>
								For many years the giant lemon tree raised and nurtured the
								little lemons until it was their time to go out into the world
								and bear fruit. Over time, the Lemons started tree communities
								of their own from the original seeds of the giant tree that
								flourished and turned into forests covering the lemon shaped
								planet.{" "}
							</p>
							<p>
								On a nearby planet a species of Doodles had begun looking to the
								stars. They had recently discovered rockets that could take them
								to the moon. Brave Doodles boarded these ships to explore where
								no Doodle had gone before.{" "}
							</p>
							<p>
								The only problem was that the rockets were too successful!
								Instead of landing on the moon they zoomed right by and found
								themselves adrift among a sea of stars. They were lost with no
								way to return home. In the distance they spotted an oddly shaped
								planet; something they had never seen before which was strange
								because their home planet was filled with oddities by any
								standard… This planet seemed to be almost lemon like!
							</p>
							<p>
								They decided to make an approach with their remaining fuel. The
								pilot spotted a clear patch to land the ship that was not
								covered in trees so the explorers made their descent. Upon
								landing they let down the ramp and were greeted by what seemed
								to be beings with lemon heads to match their lemon planet. Both
								species had never seen anything like each other, but the Doodles
								were welcomed by the Lemons to their community and invited to
								share in a feast that had been prepared for them while their
								ship refueled.{" "}
							</p>
							<p>
								During the feast the Lit Engineer of the Doodle team locked eyes
								with the Lemon Leader’s daughter. They smiled at each other. He
								had never experienced such a feeling. It was love at first
								sight.{" "}
							</p>
							<p>
								After the feast they ran to the forest together and made love.
								The Lit Doodle’s flame burned bright; brighter than ever before.
								So bright that the lemon tree sheltering them began to ignite.
								They began to realize what was happening and were forced to flee
								and return to the feast.{" "}
							</p>
							<p>
								The smell of smoke began to fill the banquet hall and the Lemons
								and Doodles both realized what was happening. A Lemon pointed at
								the Lit Engineer and rightfully accused him of starting the
								fire. The leader’s daughter attempted to protect him and begged
								the crowd to see this all as a mistake, but they overpowered
								her. The Lemons escorted the Doodles back to the ship and exiled
								them never to return.{" "}
							</p>
							<p>
								A short time later the Daughter of the Leader began developing a
								seed. A strange seed that was unlike others she had seen Lemons
								create before. She planted it near the site of the incident
								wondering what would happen. A new tree began to grow and from
								it sprang strange new Lemons.. The love children of the Doodle
								and Lemon. They were welcomed into the community and called
								Lemonoodles.
							</p>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
}

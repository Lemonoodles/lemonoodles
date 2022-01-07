import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

import one from "../../public/doodle.png";
import two from "../../public/devil.png";
import three from "../../public/cape.png";
import four from "../../public/astronaut.png";
import five from "../../public/deadpull.png";
import six from "../../public/hooded.png";
import seven from "../../public/radioactive.png";

export default function Carousel() {
	const images = [
		{ img: one, rarity: "Ultra Rare" },
		{ img: two, rarity: "Ultra Rare" },
		{ img: three, rarity: "Ultra Rare" },
		{ img: four, rarity: "Ultra Rare" },
		{ img: five, rarity: "Ultra Rare" },
		{ img: six, rarity: "Ultra Rare" },
		{ img: seven, rarity: "Ultra Rare" },
	];

	const NextArrow = ({ onClick }) => {
		return (
			<div className='arrow next' onClick={onClick}>
				<IoMdArrowDropright />
			</div>
		);
	};

	const PrevArrow = ({ onClick }) => {
		return (
			<div className='arrow prev' onClick={onClick}>
				<IoMdArrowDropleft />
			</div>
		);
	};

	const [imageIndex, setImageIndex] = useState(0);

	const settings = {
		infinite: true,
		lazyload: true,
		focusOnSelect: true,
		speed: 300,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: 0,
		swipeToSlide: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		appendDots: (dots) => (
			<div>
				<ul style={{ margin: "0px" }}> {dots} </ul>
			</div>
		),
		customPaging: (i) => (
			<div className='w-full mt-8'>
				<div className='bar bg-mint w-4 h-4 bg-opacity-100 border-2 border-black border-solid rounded-sm'></div>
				<div className='hidden'>{i + 1}</div>
			</div>
		),
		beforeChange: (current, next) => setImageIndex(next),
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 3,
					focusOnSelect: true,
					swipeToSlide: true,
					lazyload: true,
					speed: 300,
					infinite: true,
					dots: true,
					autoplay: true,
					arrows: false,
				},
			},
		],
	};

	return (
		<>
			<div className='slider'>
				<Slider {...settings}>
					{images.map((img, index) => (
						<div
							className={
								index === imageIndex
									? "slide-img slide-img-active"
									: "slide-img"
							}
							key={`0${index}`}
						>
							<Image src={img.img} alt={img.rarity} layout='responsive' />
							{/* <h3 className='font-skrap my-2 text-5xl text-center uppercase'>
								Type
							</h3> */}
							{/* <p className='text-center'>{img.rarity}</p> */}
						</div>
					))}
				</Slider>
			</div>
		</>
	);
}

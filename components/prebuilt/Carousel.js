import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

import one from "../../public/one.jpg";
import two from "../../public/two.jpg";
import three from "../../public/three.jpg";
import four from "../../public/four.jpg";
import five from "../../public/five.jpg";
import six from "../../public/six.jpg";

export default function Carousel() {
	const images = [
		{ img: one },
		{ img: two },
		{ img: three },
		{ img: four },
		{ img: five },
		{ img: six },
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
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
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
			{
				breakpoint: 600,
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
			<div className='slider max-w-full'>
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

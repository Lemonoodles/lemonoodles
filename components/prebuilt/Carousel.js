import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

import one from "../../public/scene-three.jpg";

export default function Carousel() {
	const images = [one, one, one, one, one];

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
		arrows: true,
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
			<div className='w-full mt-4'>
				<div className='bar w-8 h-2 bg-white bg-opacity-50'></div>
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
							<Image src={img} alt={img} />
						</div>
					))}
				</Slider>
			</div>
		</>
	);
}

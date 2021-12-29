import { motion, MotionConfig } from "framer-motion";

const fadeIn = {
	initial: {
		opacity: 0,
	},
	fade: {
		opacity: 1,
	},
	bottomInitial: {
		opacity: 0,
		y: -500,
	},
	bottom: {
		opacity: 1,
		y: 0,
	},
};

export default function Fade({ children, bottom }) {
	return (
		<MotionConfig transition={{ duration: 1 }}>
			<motion.div
				variants={fadeIn}
				whileInView={bottom ? "fade" : "bottom"}
				initial={bottom ? "bottomInitial" : "initial"}
				viewport={{ once: true }}
			>
				{children}
			</motion.div>
		</MotionConfig>
	);
}

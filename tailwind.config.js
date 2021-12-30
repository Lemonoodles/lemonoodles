module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				mint: "#96E5B6",
				salmon: "#F5C5DD",
				lemon: "#F5E18A",
				bblue: "#97B9F9",
				dblue: "#7793c9",
			},
			fontFamily: {
				mont: ["Montserrat", "sans-serif"],
				skrap: ["Skrapbook"],
			},
			boxShadow: {
				solid: "0 0.2em 0 0 rgba(0,0,0,100)",
				cartoon: "0 0.2em 0 0 rgba(0,0,0,100)",
			},
			dropShadow: {
				solid: "0 0 0rem rgba(0,0,0,100)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

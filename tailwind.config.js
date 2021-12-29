module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
			},
			extend: {
				colors: {
					primary: "#FFFFFF",
				},
				fontFamily: {
					mont: ["Montserrat", "sans-serif"],
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

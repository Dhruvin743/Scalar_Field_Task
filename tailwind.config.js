/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			display: ["__fkGrotesk_8a67e8"],
			code: ["__berkeleyMono_1826c3"],
		},
		extend: {
			colors: {
				textOff: "#64645f",
				offsetPlus: "#e8e8e3",
				textMain: "#13343b",
				super: "#21808d",
				background: "#fcfcf9",
				borderMain: "#d9d9d0",
				textOffDark: "#8d9191",
				backgroundDark: "#191a1a",
				borderMainDark: "#3d3f40",
				superDark: "#20b8cd",
				superDuper: "#20b8cd",
				offsetPlusDark: "#2d2f2f",
				textMainDark: "#e8e8e6",
				offset: "#f3f3ee",
				offsetDark: "#202222",
				superBG: "#dfe7e4",
			},
			fontFamily: {
				sans: ["__fkGroteskNeue_598ab8", ...defaultTheme.fontFamily.sans],
			},
			spacing: {
				threadWidth: "1100px",
			},
		},
	},
	plugins: [],
};

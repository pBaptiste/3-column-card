/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'orange' : '#E28625',
				'blue' : '#006971',
				'green' : '#004140',
				'light-grey' : '#F2F2F2',
			},
			fontFamily: {
				'display': ['"Big Shoulders Display Variable"', 'sans-serif'],
			},
		},
	},
	plugins: [],
}

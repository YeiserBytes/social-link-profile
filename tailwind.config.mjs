/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#9EC8B9',
				secondary: '#5C8374',
				tertiary: '#1B4242',
				neutral: '#092635'
			}
		},
	},
	plugins: [],
}

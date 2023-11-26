/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
		'./nuxt.config.{js,ts}',
	],
	//content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],

	theme: {
		// screens: {
		// 	mobile: '640px',
		// 	tablet: '960px',
		// 	desktop: '1280px',
		// },

		container: {
			center: true,
			screens: {
				mobile: '600px',
				tablet: '900px',
				desktop: '1200px',
			},
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		extend: {
			colors: {
				primary01: '#78C046',
				primary02: '#44883D',
				primary03: '#00592D',
				primary04: '#000',
				accentcolor_green: '#00CE7D',
				accentcolor_pink: '#fa2a6f',
				lightgray_08: '#555555',
				lightgray_07: '#666666',
				lightgray_06: '#777777',
				lightgray_05: '#9E9E9E',
				lightgray_04: '#CCCCCC',
				lightgray_03: '#D8D8D8',
				lightgray_02: '#E6E6E6',
				lightgray_01: '#F8F8F8',
				lightgreen_05: '#78C046',
				lightgreen_04: '#9E9E9E',
				lightgreen_03: '#C9E6B5',
				lightgreen_02: '#E4F2DA',
				lightgreen_01: '#F2F9ED',
				state_positive: '#F8F8F8',
				state_informative: '#006FF1',
				state_negative: '#FB4F4F',
			},
			container: {
				// screen: {
				//   '3xl': { max: '1800px' },
				// },
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '0rem',
				},
				margin: {
					'35vh': '35vh',
				},
				fontSize: {
					xs: '.75rem',
					sm: '.875rem',
					tiny: '.89rem',
					base: '1rem',
					lg: '1.125rem',
					xl: '1.25rem',
					'2xl': '1.5rem',
					'3xl': '1.875rem',
					'4xl': '2.25rem',
					'5xl': '3rem',
					'6xl': '5rem',
				},
				fontWeight: {
					xs: 'font-thin', //100
					sm: 'font-extralight', //200
					base: 'font-normal	', //400
					lg: 'font-medium', //500
					xl: 'font-semibold', //600
					'2xl': 'font-bold', //700
				},
			},
		},
	},
	corePlugins: {
		container: false,
	},
	plugins: [
		// eslint-disable-next-line prettier/prettier
		function ({addComponents}) {
			addComponents({
				'.container': {
					maxWidth: '100%',
					'@screen sm': {
						maxWidth: '640px',
					},
					'@screen md': {
						maxWidth: '768px',
					},
					'@screen lg': {
						maxWidth: '1280px',
					},
					// '@screen xl': {
					// 	maxWidth: '1600px',
					// },
					// '@screen 2xl': {
					// 	maxWidth: '2900px',
					// },
				},
			})
		},
	],
}

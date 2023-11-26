export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'v-greenhouse',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: ''},
			{name: 'format-detection', content: 'telephone=no'},
		],
		link: [
			{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
			{
				rel: 'stylesheet',
				type: 'text/css',
				href: 'https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css',
			},
		],
		script: [
			{
				hid: 'ripple',
				src: 'https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js',
				defer: true,
			},
			{
				hid: 'flowbite',
				src: 'https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js',
				defer: true,
			},
		],
	},

	devtools: {enabled: true},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~/assets/css/tailwind.css', '~/assets/css/common.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: '/',
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
}

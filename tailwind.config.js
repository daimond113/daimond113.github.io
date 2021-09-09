module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			maxWidth: {
				'8.5xl': '92rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}

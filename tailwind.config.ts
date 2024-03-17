import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			spacing: {
				'116': '29rem',
				'120': '30rem',
				'128': '32rem',
			},
			aspectRatio: {
				'3/4': '3/4',
			},
			colors: {
				light: {
					primary: '#0d3b66',
					secondary: '#fafafa',
					accent: '#00d9ff',
					text: '#333333',
					background: '#f0f0f3',
					border: '#d1d9e6',
					'text-secondary': '#555555',
				},
				dark: {
					primary: '#1a1a2e',
					secondary: '#16213e',
					accent: '#e94560',
					text: '#e6e6e6',
					background: '#121212',
					border: '#2a2a40',
					'text-secondary': '#cccccc',
				},
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
    themes: ["light", "dark"],
  },
}
export default config

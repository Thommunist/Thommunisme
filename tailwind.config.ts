import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			mobile: '965px'
		},
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				darkGreen: '#379683',
				background: '8EE4AF',
				lightGreen: '#5CDB95',
				morningBlue: '#83A0A0',
				blackCoral: '#4c5f6b',
				linkedin: '#0e76a8',
				backgroundLight: '#d2d3db',
				headerLight: '#9394a5',
				skillPost: '#8D89A5',
				highlight: '#FCA311',
				backgroundDark: '#030019',
				headerDark: '#14213D',
				textDark: '#F8F7FF',
				discord:'#5865f2',
				buttons: '#e4e5f1'
			},
			fontFamily: {
				'press-start': ['"Press Start 2P"', 'cursive'],
				ubuntu: ['"Ubuntu"', 'sans-serif']
			}
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;

const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');

const config = {
	plugins: [
		// postcss-nested must run before Tailwind CSS to handle nested rules
		postcssNested(),
		tailwindcss(),
		// Autoprefixer must run after Tailwind CSS
		autoprefixer
	]
};

module.exports = config;

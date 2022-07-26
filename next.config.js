/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	env: {
		BASE_URL: process.env.REACT_APP_BASE_URL,
		APP_ENV: process.env.REACT_APP_ENV,
	},
	images: {
		domains: ['images.punkapi.com'],
	},
};

module.exports = nextConfig;

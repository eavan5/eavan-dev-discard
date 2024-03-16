/** @type {import('next').NextConfig} */
const nextConfig = {
	// reactStrictMode: true,
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eavan-dev.s3.ap-northeast-1.amazonaws.com',
        port: '',
        pathname: '/eavan-dev/**',
      },
    ],
  },
}

export default nextConfig

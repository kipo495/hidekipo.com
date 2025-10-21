/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
    reactStrictMode: true,

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.microcms-assets.io',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;

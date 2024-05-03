/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        WEB_URL: process.env.WEB_URL,
        DISCORD_URL: process.env.DISCORD_URL,
    },
    eslint: {
        //ignoreDuringBuilds: true,
    },
};

export default nextConfig;

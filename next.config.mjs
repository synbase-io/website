/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        /* eslint-disable no-undef */
        WEB_URL: process.env.WEB_URL,
        DISCORD_URL: process.env.DISCORD_URL,
        /* eslint-enable no-undef */
    },
};

export default nextConfig;

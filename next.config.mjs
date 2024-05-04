import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        WEB_URL: process.env.WEB_URL,
        DISCORD_URL: process.env.DISCORD_URL,
    },
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"], // Includes markdown files
    eslint: {
        ignoreDuringBuilds: true,
    },
};

const withMDX = createMDX({
    // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);

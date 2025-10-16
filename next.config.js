/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: "/js/script.js", destination: "https://plausible.io/js/script.js" },
      { source: "/api/event", destination: "https://plausible.io/api/event" },
    ];
  },
};

module.exports = nextConfig;

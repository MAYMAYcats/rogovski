/*import type { NextConfig } from "next";

const nextConfig: NextConfig = {

};

export default nextConfig;

module.exports = {
images: {
    domains: ['images.ctfassets.net'], // Add the domain here
    },
  reactStrictMode: false,
};
*/

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net', // Add the hostname here
      },
    ],
  },
  reactStrictMode: false,
};


export default nextConfig;

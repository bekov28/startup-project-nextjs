import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ["placehold.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  // experimental: {
  //   ppr: "incremental",
  // },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};
module.exports = nextConfig;

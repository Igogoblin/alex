import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  cssOptions: {
    prependData: `@import "./styles/_variables.css";`,
  },
};

export default nextConfig;
module.exports = {
  webpack(config: {
    module: { rules: { test: RegExp; issuer: RegExp; use: string[] }[] };
  }) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

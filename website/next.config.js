const withBundleAnalyzer = require("@next/bundle-analyzer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  rewrites: async () => [
    {
      source: "/:path*",
      destination: `/:path*`,
    },
    // {
    //   source: "/docs",
    //   destination: `${ ''}/docs`, // Use empty string if undefined
    // },
    // {
    //   source: "/docs/:path*",
    //   destination: `${''}/docs/:path*`, // Use empty string if undefined
    // },
  ],
};

module.exports = (_phase, { defaultConfig: _ }) => {
  const plugins = [
    withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" }),
  ];
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};

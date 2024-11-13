// /** @type {import('next').NextConfig} */
// // import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants.js";
// // const { withContentlayer } = require("next-contentlayer");
// import { withContentlayer } from "next-contentlayer";

// // const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
// export default withContentlayer((phase, { defaultConfig }) => {
//   const config = {
//     env: {
//       mongodb_username: "flycool",
//       mongodb_password: "TeZqxPEs6epMWWfH",
//       mongodb_custername: "Cluster0",
//       mongodb_database: "my-site",
//     },
//   };
//   return config;
// });

const { withContentlayer } = require("next-contentlayer2");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  //distDir: 'dist',
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = withContentlayer(nextConfig);

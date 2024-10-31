/** @type {import('next').NextConfig} */
// import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants.js";

// const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
export default (phase, { defaultConfig }) => {
  const nextConfig = {
    env: {
      mongodb_username: "flycool",
      mongodb_password: "TeZqxPEs6epMWWfH",
      mongodb_custername: "Cluster0",
      mongodb_database: "my-site",
    },
  };
  return nextConfig;
};

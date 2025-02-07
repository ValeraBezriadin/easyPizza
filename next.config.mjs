/** @type {import('next').NextConfig} */
const nextConfig = {
  extends: [
    // ...
    "plugin:@next/next/recommended",
  ],
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

export default nextConfig;

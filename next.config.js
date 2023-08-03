/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    //domains: ["orderque-images.s3.us-east-1.amazonaws.com"],
    //domains: ["localhost:3000"],
    domains: ["restaurant-images-hadeel.s3.us-east-2.amazonaws.com"],
  },
};

module.exports = nextConfig;

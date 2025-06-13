/** @type {import('next').NextConfig} */
const nextConfig = {}
 
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  //openAnalyzer: false, // <-- prevents opening the browser
});
 
module.exports = withBundleAnalyzer(nextConfig)

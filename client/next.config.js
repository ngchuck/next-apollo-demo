/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}
//commented to add docker configs
// module.exports = nextConfig

module.exports = {
    // ... rest of the configuration.
    output: 'standalone',
}

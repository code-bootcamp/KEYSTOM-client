/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash:true,
  generateBuildId: () => "keystom-deploy",
  exportPathMap: () => ({
    "/": { page: "/"},
    "/signup": { page: "/"},
    "/404": { page: "/404"},
  })
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['@prisma/client', 'bcrypt'],
      },
      images:{
        remotePatterns:[
          {
            protocol: 'https',
            hostname: 'www.vecteezy.com',
          },
        ]
      }
}

module.exports = nextConfig

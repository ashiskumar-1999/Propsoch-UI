/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr'], // Add supported locales
    defaultLocale: 'en', // Set the default locale
  },
};

export default nextConfig;

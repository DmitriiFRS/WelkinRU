/** @type {import('next').NextConfig} */
module.exports = {
   trailingSlash: true,
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "welkingroup.ru",
         },
      ],
   },
};

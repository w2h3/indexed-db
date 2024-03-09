/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    NEXT_PUBLIC_PRJID: process.env.VERCEL_PROJECT_ID
  }
}

export default nextConfig;

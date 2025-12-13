// Required for static export
export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://writetobrain.com/sitemap.xml',
  }
}


import './globals.css'

export const metadata = {
  title: 'writetobrain',
  description: 'Writing to the brain',
  icons: { icon: '/favicon.png' }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png" />
      </head>
      <body>
        <main className="container" id="main-container">
          {children}
        </main>
      </body>
    </html>
  )
}

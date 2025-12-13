import './globals.css'

const baseUrl = 'https://writetobrain.com'

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Write to Brain - Non-Invasive Brain-Computer Interface Research',
    template: '%s | Write to Brain',
  },
  description: 'Pioneering non-invasive brain stimulation using focused ultrasound. We induced artificial smells through ultrasound olfactory stimulation - a potential pathway for direct brain-computer interfaces without surgery.',
  keywords: [
    'nose bci',
    'fake smells',
    'ultrasound olfactory',
    'artificial smells',
    'olfactory stimulation',
    'brain-computer interface',
    'non-invasive bci',
    'focused ultrasound',
    'ultrasound brain stimulation',
    'tFUS',
    'transcranial focused ultrasound',
    'neuromodulation',
    'smell hallucination',
    'induced smell',
    'olfactory bulb stimulation',
    'neural interface',
    'smell technology',
    'scent stimulation',
    'perfume technology'
  ],
  authors: [
    { name: 'Lev Chizhov', url: 'https://lev.la' },
    { name: 'Albert Yan-Huang', url: 'https://exr0n.com/' },
    { name: 'Thomas Ribeiro', url: 'https://thomasrribeiro.com/' },
    { name: 'Aayush Gupta', url: 'https://aayushg.com/' },
  ],
  creator: 'Write to Brain Team',
  publisher: 'Write to Brain',
  icons: { icon: '/favicon.png' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Write to Brain',
    title: 'Write to Brain - Non-Invasive Brain-Computer Interface Research',
    description: 'Pioneering non-invasive brain stimulation using focused ultrasound. We induced artificial smells through ultrasound olfactory stimulation.',
    images: [
      {
        url: `${baseUrl}/images/image6.png`,
        width: 1074,
        height: 1000,
        alt: 'Write to Brain - Ultrasound Olfactory Stimulation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Write to Brain - Non-Invasive Brain-Computer Interface Research',
    description: 'We induced artificial smells through ultrasound brain stimulation. A potential pathway for direct brain-computer interfaces.',
    images: [`${baseUrl}/images/image6.png`],
    creator: '@ennucore',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    // Add your Google Search Console verification code here when you have it
    // google: 'your-verification-code',
  },
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

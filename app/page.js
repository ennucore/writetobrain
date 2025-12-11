import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Write to Brain',
  description: 'Research on non-invasive brain-computer interfaces using focused ultrasound. Inducing artificial smells and other sensations through direct brain stimulation.',
  url: 'https://writetobrain.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://writetobrain.com/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Write to Brain',
    url: 'https://writetobrain.com',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ResearchOrganization',
  name: 'Write to Brain',
  url: 'https://writetobrain.com',
  description: 'Pioneering non-invasive brain-computer interface research using focused ultrasound for olfactory and sensory stimulation.',
  knowsAbout: [
    'Brain-Computer Interface',
    'Focused Ultrasound',
    'Neuromodulation',
    'Olfactory Stimulation',
    'Non-invasive Brain Stimulation',
  ],
}

export default function Home() {
  return (
    <>
      <Script
        id="website-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="org-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <div className="max-w-2xl mx-auto mt-20">
        <h1 className="text-3xl font-bold mb-8 font-heading">Methods of Writing to Brain</h1>

      <div className="border-t border-accent" style={{ paddingTop: '0.3rem' }}>
        <Link href="/olfactory" className="block group no-underline">
          <div className="flex justify-between items-center py-6 px-4 -mx-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-50 hover:scale-[1.02] hover:shadow-lg border-b border-accent group-hover:border-transparent">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src="/images/image6.png"
                  alt="Olfactory illustration"
                  width={64}
                  height={64}
                  style={{
                    width: '10rem', marginRight: '3rem'
                  }}
                  className="object-cover rounded-md w-full h-full"
                />
              </div>
              <span className="text-xl font-medium group-hover:text-foreground transition-colors arrow-hover arrow-hover-no-underline">
                Ultrasound Olfactory Stimulation
              </span>
            </div>
            <span className="text-accent text-sm group-hover:text-foreground transition-colors">2025</span>
          </div>
        </Link>
        {/* Placeholder for future methods */}
        </div>
      </div>
    </>
  )
}

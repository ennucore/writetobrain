import Content from './content.mdx'
import Link from 'next/link'
import Image from 'next/image'
import TableOfContents from './TableOfContents'
import { FootnoteProvider } from './FootnoteContext'
import FootnoteDisplay from './FootnoteDisplay'
import Script from 'next/script'

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'We Induced Artificial Smells With Ultrasound Brain Stimulation',
    description: 'First-ever ultrasound olfactory stimulation in humans. We used focused ultrasound to stimulate the olfactory bulb and reliably induced distinct artificial smells like campfire and fresh air.',
    image: 'https://writetobrain.com/images/image6.png',
    datePublished: '2025-01-01',
    dateModified: '2025-01-01',
    author: [
        {
            '@type': 'Person',
            name: 'Lev Chizhov',
            url: 'https://lev.la',
        },
        {
            '@type': 'Person',
            name: 'Albert Yan-Huang',
            url: 'https://exr0n.com/',
        },
        {
            '@type': 'Person',
            name: 'Thomas Ribeiro',
            url: 'https://thomasrribeiro.com/',
        },
        {
            '@type': 'Person',
            name: 'Aayush Gupta',
            url: 'https://aayushg.com/',
        },
    ],
    publisher: {
        '@type': 'Organization',
        name: 'Write to Brain',
        url: 'https://writetobrain.com',
        logo: {
            '@type': 'ImageObject',
            url: 'https://writetobrain.com/favicon.png',
        },
    },
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://writetobrain.com/olfactory',
    },
    keywords: 'fake smells, artificial smells, nose bci, ultrasound olfactory, olfactory stimulation, brain-computer interface, ultrasound brain stimulation, neuromodulation',
    about: [
        {
            '@type': 'Thing',
            name: 'Brain-Computer Interface',
        },
        {
            '@type': 'Thing',
            name: 'Ultrasound Neuromodulation',
        },
        {
            '@type': 'Thing',
            name: 'Olfactory System',
        },
    ],
}

export const metadata = {
    title: 'We Induced Artificial Smells With Ultrasound Brain Stimulation',
    description: 'First-ever ultrasound olfactory stimulation in humans. We used focused ultrasound to stimulate the olfactory bulb and reliably induced distinct artificial smells like campfire and fresh air. A breakthrough in non-invasive brain-computer interfaces (nose BCI).',
    keywords: [
        'fake smells',
        'artificial smells',
        'nose bci',
        'ultrasound olfactory',
        'olfactory stimulation',
        'ultrasound smell',
        'induced smells',
        'brain stimulation smells',
        'olfactory bulb ultrasound',
        'transcranial ultrasound olfactory',
        'smell hallucination technology',
        'non-invasive smell induction',
        'ultrasound brain interface',
        'smell bci',
        'olfactory bci',
        'focused ultrasound smell',
        'smell latent space',
    ],
    authors: [
        { name: 'Lev Chizhov', url: 'https://lev.la' },
        { name: 'Albert Yan-Huang', url: 'https://exr0n.com/' },
        { name: 'Thomas Ribeiro', url: 'https://thomasrribeiro.com/' },
        { name: 'Aayush Gupta', url: 'https://aayushg.com/' },
    ],
    openGraph: {
        type: 'article',
        title: 'We Induced Artificial Smells With Ultrasound Brain Stimulation',
        description: 'First-ever ultrasound olfactory stimulation in humans. We induced distinct artificial smells like campfire and fresh air using focused ultrasound - a nose BCI breakthrough.',
        url: 'https://writetobrain.com/olfactory',
        siteName: 'Write to Brain',
        images: [
            {
                url: 'https://writetobrain.com/images/image6.png',
                width: 1074,
                height: 1000,
                alt: 'Ultrasound Olfactory Stimulation - Inducing Artificial Smells with Brain Stimulation',
            },
        ],
        publishedTime: '2025-01-01T00:00:00.000Z',
        authors: ['Lev Chizhov', 'Albert Yan-Huang', 'Thomas Ribeiro', 'Aayush Gupta'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'We Induced Artificial Smells With Ultrasound',
        description: 'First ultrasound olfactory stimulation in humans! We reliably induced distinct smells like campfire and fresh air. A nose BCI breakthrough.',
        images: ['https://writetobrain.com/images/image6.png'],
        creator: '@ennucore',
    },
    alternates: {
        canonical: 'https://writetobrain.com/olfactory',
    },
}

export default function OlfactoryPage() {
    return (
        <>
            <Script
                id="json-ld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <article>
                <header className="mb-8 mt-36 text-center">
                <div className="flex justify-center">
                    <Image
                        src="/images/image6.png"
                        alt="Olfactory illustration"
                        width={1074}
                        height={1000}
                        className="object-contain"
                        style={{ width: '20rem', height: 'auto', marginTop: '1rem', marginBottom: '2rem' }}
                    />
                </div>
                <h1 className="text-3xl font-bold mb-2">We Induced Smells With Ultrasound</h1>
                <p className="text-lg italic mb-4">
                    We stimulated the scent-processing brain regions with focused ultrasound. As far as we know, no one seems to have done this kind of stimulation before - even in animals. We reliably produced distinct scents such as a campfire burn or fresh air!
                </p>
                <div className="text-sm text-accent">
                    <a href="https://lev.la" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Lev Chizhov</a>,{' '}
                    <a href="https://exr0n.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Albert Yan-Huang</a>,{' '}
                    <a href="https://thomasrribeiro.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Thomas Ribeiro</a>,{' '}
                    <a href="https://aayushg.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Aayush Gupta</a>
                </div>
                <p className="text-sm italic mb-4">
                Discuss on <a href="https://news.ycombinator.com/item?id=46008332">hn</a> or <a href="https://x.com/ennucore/status/1991949868773126361">x</a>.
                </p>
            </header>

            {/* <div className="mb-8">
                <video controls className="w-full rounded-lg" style={{ maxHeight: '500px', width: '100%' }}>
                    <source src="/videos/signal-2025-11-18-124020.mov" type="video/quicktime" />
                    <source src="/videos/signal-2025-11-18-124020.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */}

            <div className="lg:flex lg:gap-12 relative mb-48">
                <div className="hidden lg:block sticky top-8 self-start w-64 pr-8">
                    {/* <div className="mb-8">
                        <Link href="/" className="text-sm text-accent hover:text-foreground transition-colors">
                            ← Go to main
                        </Link>
                    </div> */}
                    <TableOfContents />
                </div>
                <div className="flex-1 min-w-0 xl:pr-64">
                    <FootnoteProvider>
                        <Content />
                        <FootnoteDisplay />
                    </FootnoteProvider>
                </div>
            </div>
            {/* 
            <div className="mt-16 pt-8 border-t border-accent">
                <Link href="/" className="text-sm text-accent hover:text-foreground transition-colors">
                    ← Go to main
                </Link>
            </div> */}
            </article>
        </>
    )
}

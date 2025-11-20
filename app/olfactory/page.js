import Content from './content.mdx'
import Link from 'next/link'
import Image from 'next/image'
import TableOfContents from './TableOfContents'

export default function OlfactoryPage() {
    return (
        <article>
            <header className="mb-8 text-center">
                <div className="flex justify-center">
                    <Image
                        src="/images/image6.png"
                        alt="Olfactory illustration"
                        width={1074}
                        height={1000}
                        className="object-contain"
                        style={{ width: '15rem', height: 'auto', marginTop: '1rem', marginBottom: '0' }}
                    />
                </div>
                <h1 className="text-3xl font-bold mb-2">We Induced Smells With Ultrasound</h1>
                <p className="text-lg italic mb-4">
                    We decided to try to stimulate the olfactory bulb with focused ultrasound. As far as we know, no one seems to have done this kind of stimulation before - even in animals. We obtained smells like campfire or fresh air in two days, replicated across two people!
                </p>
                <div className="text-sm text-accent">
                    <a href="https://lev.la" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Lev Chizhov</a>,{' '}
                    <a href="https://exr0n.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Albert Yan-Huang</a>,{' '}
                    <a href="https://x.com/thomas_rribeiro" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Thomas Ribeiro</a>,{' '}
                    <a href="https://aayushg.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Aayush Gupta</a>
                </div>
            </header>

            {/* <div className="mb-8">
                <video controls className="w-full rounded-lg" style={{ maxHeight: '500px', width: '100%' }}>
                    <source src="/videos/signal-2025-11-18-124020.mov" type="video/quicktime" />
                    <source src="/videos/signal-2025-11-18-124020.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */}

            <div className="lg:flex lg:gap-12 relative">
                <div className="hidden lg:block sticky top-8 self-start w-64 pr-8">
                    {/* <div className="mb-8">
                        <Link href="/" className="text-sm text-accent hover:text-foreground transition-colors">
                            ← Go to main
                        </Link>
                    </div> */}
                    <TableOfContents />
                </div>
                <div className="flex-1 min-w-0">
                    <Content />
                </div>
            </div>
            {/* 
            <div className="mt-16 pt-8 border-t border-accent">
                <Link href="/" className="text-sm text-accent hover:text-foreground transition-colors">
                    ← Go to main
                </Link>
            </div> */}
        </article>
    )
}

import Content from './content.mdx'
import Link from 'next/link'
import TableOfContents from './TableOfContents'

export default function OlfactoryPage() {
    return (
        <article>
            <header className="mb-8 text-center">
                <h1 className="text-3xl font-bold mb-2">Smell the ultrasound</h1>
                <p className="text-xl text-accent italic mb-4">
                    Inducing smell sensations with transcranial focused ultrasound stimulation of the olfactory system
                </p>
                <div className="text-sm text-accent">
                    Lev Chizhov, Albert Yan-Huang, Thomas Ribeiro, Aayush Gupta
                </div>
            </header>

            <div className="mb-8">
                <video controls className="w-full rounded-lg" style={{ maxHeight: '500px', width: '100%' }}>
                    <source src="/videos/signal-2025-11-18-124020.mov" type="video/quicktime" />
                    <source src="/videos/signal-2025-11-18-124020.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

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

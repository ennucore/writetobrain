import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-8 font-heading">Methods of writing to brain</h1>

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
  )
}

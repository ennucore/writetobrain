import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-8 font-heading">Methods of writing to brain</h1>

      <div className="border-t border-accent">
        <div className="flex justify-between items-center py-4 border-b border-accent hover:bg-gray-50 transition-colors">
          <Link href="/olfactory" className="text-xl block w-full no-underline hover:text-foreground">
            Ultrasound Olfactory Stimulation
          </Link>
          <span className="text-accent text-sm">2025</span>
        </div>
        {/* Placeholder for future methods */}
      </div>
    </div>
  )
}

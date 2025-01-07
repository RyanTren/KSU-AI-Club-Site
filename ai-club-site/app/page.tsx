// import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="z-10 px-4">
          <h1 className="text-5xl font-bold mb-4">AI Club Logo</h1>
          <h2 className="text-3xl mb-2">AI Club at Kennesaw State University</h2>
          <p className="text-xl mb-8">Exploring the future of Artificial Intelligence</p>
          <div className="space-x-4">
            <Link href="/learn-more" 
              className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90">
              Learn More
            </Link>
            <Link href="/blog" 
              className="bg-transparent border-2 border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600">
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <p className="text-lg text-gray-700 text-center">
            At the AI Club, we bring together curious minds and innovators to explore 
            the endless possibilities of Artificial Intelligence. Join our events, 
            workshops, and discussions as we dive into the future of technology!
          </p>
        </div>
      </section>
    </main>
  )
}
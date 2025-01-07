import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-ksu-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-ksu-black hover:text-ksu-gold">
            KSU AI Club
          </Link>
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-ksu-black hover:text-ksu-gold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-ksu-black hover:text-ksu-gold">
                About
              </Link>
            </li>
            <li>
              <Link href="/sponsors" className="text-ksu-black hover:text-ksu-gold">
                Sponsors
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-ksu-black hover:text-ksu-gold">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
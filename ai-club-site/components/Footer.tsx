export default function Footer() {
    return (
      <footer className="bg-ksu-black text-ksu-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">© 2025 AI Club at Kennesaw State University. All rights reserved.</p>
          <p className="text-sm text-gray-400">
            Developed by{' '}
            <a 
              href="https://www.linkedin.com/in/ryantren/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-ksu-gold transition-colors"
            >
              Ryan Tran
            </a>
          </p>
        </div>
      </footer>
    )
  }
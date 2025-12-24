import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#F4F4F5] w-full">
      <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-gray-800 font-medium text-3xl"
              style={{ fontFamily: 'var(--font-chakra-petch), sans-serif' }}
            >
              OPTIXEL
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-800 font-medium text-sm uppercase tracking-wide border-b border-gray-800 pb-1 hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'var(--font-ibm-plex-mono), monospace' }}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-gray-800 font-medium text-sm uppercase tracking-wide border-b border-gray-800 pb-1 hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'var(--font-ibm-plex-mono), monospace' }}
            >
              ABOUT US
            </Link>
            <Link
              href="/warranty"
              className="text-gray-800 font-medium text-sm uppercase tracking-wide border-b border-gray-800 pb-1 hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'var(--font-ibm-plex-mono), monospace' }}
            >
              WARRANTY & RETURNS
            </Link>
            <Link
              href="/help"
              className="text-gray-800 font-medium text-sm uppercase tracking-wide border-b border-gray-800 pb-1 hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'var(--font-ibm-plex-mono), monospace' }}
            >
              HELP CENTER
            </Link>
            <Link
              href="/404"
              className="text-gray-800 font-medium text-sm uppercase tracking-wide border-b border-gray-800 pb-1 hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'var(--font-ibm-plex-mono), monospace' }}
            >
              404 Page
            </Link>
          </div>

          {/* Buy Now Button */}
          <div className="flex-shrink-0">
            <Link
              href="/buy"
              className="text-blue-600 font-medium text-sm uppercase tracking-wide border-b border-blue-600 pb-1 hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'var(--font-ibm-plex-mono), monospace' }}
            >
              BUY NOW
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}


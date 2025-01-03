import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
          <li><Link href="/about" className="text-blue-600 hover:text-blue-800">About</Link></li>
          <li><Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

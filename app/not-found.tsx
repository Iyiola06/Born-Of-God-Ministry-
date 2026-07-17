import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brand-black text-white px-6">
      <h2 className="text-4xl font-bold mb-4 font-heading text-brand">404 - Not Found</h2>
      <p className="text-white/60 mb-8 text-center max-w-md">The page you are looking for does not exist.</p>
      <Link href="/" className="px-6 py-3 rounded-full bg-brand text-black font-semibold hover:bg-brand/90 transition-colors">
        Return Home
      </Link>
    </div>
  )
}

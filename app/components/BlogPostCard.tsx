import Link from 'next/link'
import Image from 'next/image'

interface BlogPostCardProps {
  title: string
  slug: string
  excerpt: string
  featuredImage: {
    url: string
    description: string
  }
}

export default function BlogPostCard({ title, slug, excerpt, featuredImage }: BlogPostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image 
        src={featuredImage.url} 
        alt={featuredImage.description} 
        width={400} 
        height={200} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link href={`/blog/${slug}`} className="text-blue-600 hover:text-blue-800">
          Read more
        </Link>
      </div>
    </div>
  )
}
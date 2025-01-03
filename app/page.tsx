import { getBlogPosts } from './lib/contentful'
import BlogPostCard from './components/BlogPostCard'

export default async function Home() {
  const posts = await getBlogPosts()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: any) => (
          <BlogPostCard
            key={post.sys.id}
            title={post.fields.title}
            slug={post.fields.slug}
            excerpt={post.fields.excerpt}
            featuredImage={post.fields.featuredImage.fields}
          />
        ))}
      </div>
    </div>
  )
}


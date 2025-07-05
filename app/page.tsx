import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { format } from 'date-fns';

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <div className="container py-12">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Japan Sim Trip</h1>
        <p className="text-xl text-gray-600 mb-6">
          Your comprehensive guide to staying connected in Japan. Find the best SIM cards, 
          pocket WiFi options, and JR Pass information for your Japan adventure.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <Link href={`/posts/${post.slug}`}>
                <h3 className="text-2xl font-semibold mb-2 hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </Link>
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <time dateTime={post.date}>
                  {format(new Date(post.date), 'MMMM dd, yyyy')}
                </time>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No posts yet. Add markdown files to the /posts directory to see them here.</p>
          </div>
        )}
      </section>
    </div>
  );
}

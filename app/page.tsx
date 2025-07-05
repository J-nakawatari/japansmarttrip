import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { format } from 'date-fns';
import Hero from '@/components/Hero';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <>
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Section */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  Featured Articles
                </h2>
                <Link href="/all-posts" className="btn btn-ghost btn-sm">
                  View All →
                </Link>
              </div>

              <div className="grid gap-6">
                {posts.map((post, index) => (
                  <article
                    key={post.slug}
                    className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-all ${
                      index === 0 ? 'md:card-side' : ''
                    }`}
                  >
                    {/* Featured Image Placeholder */}
                    <figure className={index === 0 ? 'md:w-2/5' : ''}>
                      <div className={`bg-gradient-to-br from-primary to-secondary ${
                        index === 0 ? 'h-full min-h-[300px]' : 'h-48'
                      } w-full flex items-center justify-center`}>
                        <svg className="w-24 h-24 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </figure>
                    
                    <div className="card-body">
                      <div className="flex gap-2 mb-2">
                        {post.tags.map((tag) => (
                          <span key={tag} className="badge badge-secondary badge-sm">{tag}</span>
                        ))}
                      </div>
                      
                      <h3 className={`card-title ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                        <Link href={`/posts/${post.slug}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      
                      {index === 0 && (
                        <p className="text-base-content/70">
                          Get the most comprehensive guide to staying connected in Japan with our detailed comparison of SIM cards, pocket WiFi, and connectivity options...
                        </p>
                      )}
                      
                      <div className="card-actions justify-between items-center mt-4">
                        <time className="text-sm opacity-70" dateTime={post.date}>
                          {format(new Date(post.date), 'MMMM dd, yyyy')}
                        </time>
                        <Link href={`/posts/${post.slug}`} className="btn btn-primary btn-sm">
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Categories Grid */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Browse by Topic</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/category/sim" className="card bg-gradient-to-br from-primary to-primary-focus text-primary-content hover:shadow-xl transition-all">
                  <div className="card-body items-center text-center">
                    <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h3 className="card-title">SIM Cards</h3>
                    <p className="text-sm opacity-90">Complete guides to Japan SIM cards</p>
                  </div>
                </Link>
                
                <Link href="/category/wifi" className="card bg-gradient-to-br from-secondary to-secondary-focus text-secondary-content hover:shadow-xl transition-all">
                  <div className="card-body items-center text-center">
                    <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                    <h3 className="card-title">Pocket WiFi</h3>
                    <p className="text-sm opacity-90">WiFi rental options and reviews</p>
                  </div>
                </Link>
                
                <Link href="/category/transport" className="card bg-gradient-to-br from-accent to-accent-focus text-accent-content hover:shadow-xl transition-all">
                  <div className="card-body items-center text-center">
                    <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h3 className="card-title">JR Pass</h3>
                    <p className="text-sm opacity-90">Train pass guides and calculators</p>
                  </div>
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar posts={posts} />
          </div>
        </div>
      </div>
    </>
  );
}

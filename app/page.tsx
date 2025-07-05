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
                {posts.slice(0, 6).map((post, index) => {
                  const colors = ['primary', 'secondary', 'accent'];
                  const color = colors[index % colors.length];
                  
                  return (
                    <Link key={post.slug} href={`/posts/${post.slug}`}>
                      <article className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all cursor-pointer group">
                        <figure className={`h-48 bg-${color} bg-opacity-20`}>
                          <div className="w-full h-full flex items-center justify-center">
                            <svg className={`w-24 h-24 text-${color} opacity-50`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                        </figure>
                        
                        <div className="card-body">
                          <div className="flex gap-2 mb-2">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className={`badge badge-${color} badge-sm`}>{tag}</span>
                            ))}
                          </div>
                          <h3 className="card-title text-xl group-hover:text-primary transition-colors">{post.title}</h3>
                          <p className="text-base-content/70 text-sm">Discover everything you need to know about {post.title.toLowerCase()} in Japan.</p>
                          
                          <div className="card-actions justify-between items-center mt-4">
                            <time className="text-sm text-base-content/60" dateTime={post.date}>
                              {format(new Date(post.date), 'MMM dd, yyyy')}
                            </time>
                            <button className="btn btn-primary btn-sm">
                              Read More
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* Categories Grid */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Browse by Topic</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/category/sim" className="group">
                  <div className="card bg-primary text-primary-content h-48 hover:shadow-2xl transition-all group-hover:scale-105">
                    <div className="card-body items-center justify-center text-center">
                      <svg className="w-16 h-16 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <h3 className="card-title text-xl">SIM Cards</h3>
                      <p className="text-sm opacity-90">15 Articles</p>
                    </div>
                  </div>
                </Link>
                
                <Link href="/category/wifi" className="group">
                  <div className="card bg-secondary text-secondary-content h-48 hover:shadow-2xl transition-all group-hover:scale-105">
                    <div className="card-body items-center justify-center text-center">
                      <svg className="w-16 h-16 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                      </svg>
                      <h3 className="card-title text-xl">Pocket WiFi</h3>
                      <p className="text-sm opacity-90">20 Articles</p>
                    </div>
                  </div>
                </Link>
                
                <Link href="/category/transport" className="group">
                  <div className="card bg-accent text-accent-content h-48 hover:shadow-2xl transition-all group-hover:scale-105">
                    <div className="card-body items-center justify-center text-center">
                      <svg className="w-16 h-16 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <h3 className="card-title text-xl">JR Pass</h3>
                      <p className="text-sm opacity-90">12 Articles</p>
                    </div>
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

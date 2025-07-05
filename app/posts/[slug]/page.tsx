import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { format } from 'date-fns';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostData(slug);
  
  return {
    title: `${post.title} | Japan Sim Trip`,
    description: `Read about ${post.title} - comprehensive guide for Japan travelers.`,
    openGraph: {
      title: post.title,
      description: `Read about ${post.title} - comprehensive guide for Japan travelers.`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Japan Sim Trip'],
      tags: post.tags,
    },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <article className="lg:col-span-2">
          {/* Breadcrumbs */}
          <div className="breadcrumbs text-sm mb-6">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/posts">Articles</Link></li>
              <li>{post.title.substring(0, 30)}...</li>
            </ul>
          </div>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-base-content/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time className="text-base-content/70" dateTime={post.date}>
                  {format(new Date(post.date), 'MMMM dd, yyyy')}
                </time>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-base-content/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-base-content/70">5 min read</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/category/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="badge badge-lg badge-secondary"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </header>

          {/* Featured Image Placeholder */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-gradient-to-br from-primary to-secondary h-96 flex items-center justify-center">
              <svg className="w-32 h-32 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-base-content prose-p:text-base-content/80 prose-strong:text-base-content prose-code:text-primary prose-pre:bg-base-200 prose-blockquote:border-l-primary prose-blockquote:text-base-content/70"
            dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
          />

          {/* Share Section */}
          <div className="divider my-12"></div>
          
          <div className="card bg-base-200">
            <div className="card-body">
              <h3 className="card-title">Share this article</h3>
              <div className="flex gap-2">
                <button className="btn btn-circle btn-primary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="btn btn-circle btn-secondary">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </button>
                <button className="btn btn-circle btn-accent">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          {/* Table of Contents */}
          <div className="card bg-base-200 shadow-xl mb-6 sticky top-24">
            <div className="card-body">
              <h2 className="card-title text-xl mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Table of Contents
              </h2>
              <ul className="menu menu-compact">
                <li><a href="#" className="text-sm">Introduction</a></li>
                <li><a href="#" className="text-sm">Why You Need a SIM Card</a></li>
                <li><a href="#" className="text-sm">Types Available</a></li>
                <li><a href="#" className="text-sm">Where to Buy</a></li>
                <li><a href="#" className="text-sm">Top Providers</a></li>
                <li><a href="#" className="text-sm">Installation Guide</a></li>
                <li><a href="#" className="text-sm">Tips & Tricks</a></li>
                <li><a href="#" className="text-sm">Conclusion</a></li>
              </ul>
            </div>
          </div>

          {/* Related Articles */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-xl mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Related Articles
              </h2>
              <div className="space-y-3">
                <Link href="#" className="block p-3 rounded-lg hover:bg-base-300 transition-colors">
                  <h3 className="font-semibold text-sm line-clamp-2">Best Pocket WiFi Options for Groups</h3>
                  <p className="text-xs opacity-70 mt-1">December 28, 2024</p>
                </Link>
                <Link href="#" className="block p-3 rounded-lg hover:bg-base-300 transition-colors">
                  <h3 className="font-semibold text-sm line-clamp-2">Free WiFi Spots in Tokyo</h3>
                  <p className="text-xs opacity-70 mt-1">December 25, 2024</p>
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
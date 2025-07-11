import { PostData } from '@/lib/posts';
import Link from 'next/link';

interface SidebarProps {
  posts: PostData[];
}

export default function Sidebar({ posts }: SidebarProps) {
  // カテゴリ別に集計
  const categories = posts.reduce((acc, post) => {
    post.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  // 最新記事3件
  const recentPosts = posts.slice(0, 3);

  return (
    <aside className="space-y-6 sticky top-24">
      {/* カテゴリ */}
      <div className="card bg-base-100 shadow-xl border border-base-200">
        <div className="card-body">
          <h2 className="card-title text-xl mb-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            Categories
          </h2>
          <div className="space-y-2">
            {Object.entries(categories).map(([category, count]) => (
              <Link 
                key={category}
                href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex justify-between items-center p-3 rounded-lg hover:bg-base-200 transition-all group"
              >
                <span className="font-medium group-hover:text-primary transition-colors">{category}</span>
                <span className="badge badge-primary badge-sm">{count}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 最新記事 */}
      <div className="card bg-base-100 shadow-xl border border-base-200">
        <div className="card-body">
          <h2 className="card-title text-xl mb-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            Recent Posts
          </h2>
          <div className="space-y-3">
            {recentPosts.map((post) => (
              <Link 
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="block p-3 rounded-lg hover:bg-base-200 transition-all group"
              >
                <h3 className="font-semibold text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-xs opacity-70">{post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="card bg-base-100 shadow-xl border border-base-200">
        <div className="card-body">
          <h2 className="card-title text-xl mb-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li><a href="#" className="btn btn-sm btn-ghost w-full justify-start">📊 JR Pass Calculator</a></li>
            <li><a href="#" className="btn btn-sm btn-ghost w-full justify-start">📱 SIM Card Comparison</a></li>
            <li><a href="#" className="btn btn-sm btn-ghost w-full justify-start">📡 WiFi Coverage Map</a></li>
            <li><a href="#" className="btn btn-sm btn-ghost w-full justify-start">✅ Travel Checklist</a></li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="card bg-primary text-primary-content shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-xl mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Stay Updated
          </h2>
          <p className="text-sm mb-4 opacity-90">Get the latest Japan travel tech tips!</p>
          <div className="form-control">
            <input type="email" placeholder="your@email.com" className="input input-bordered" />
            <button className="btn btn-accent mt-2">Subscribe</button>
          </div>
        </div>
      </div>
    </aside>
  );
}
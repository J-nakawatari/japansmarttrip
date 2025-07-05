import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { format } from 'date-fns';
import { Metadata } from 'next';

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
    <article className="container py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-gray-500 mb-4">
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
      </header>
      
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
      />
    </article>
  );
}
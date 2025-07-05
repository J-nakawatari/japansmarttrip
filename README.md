# Japan Sim Trip - Travel Connectivity Blog

A static blog site built with Next.js for sharing information about SIM cards, WiFi, and JR Pass for travelers in Japan.

## 🚀 Features

- **Static Site Generation (SSG)** - Fast, SEO-friendly static pages
- **Markdown-based** - Easy content management with Markdown files
- **Responsive Design** - Mobile-friendly with Tailwind CSS
- **SEO Optimized** - Meta tags, sitemap, and structured data
- **Google Analytics** - Traffic tracking integrated

## 📁 Project Structure

```
japansimtrip/
├── app/
│   ├── layout.tsx          # Main layout with navigation
│   ├── page.tsx            # Homepage with article list
│   ├── about/
│   │   └── page.tsx        # About page
│   └── posts/
│       └── [slug]/
│           └── page.tsx    # Dynamic post pages
├── posts/                  # Markdown blog posts
│   ├── japan-sim-guide.md
│   ├── pocket-wifi-japan.md
│   └── jr-pass-guide.md
├── lib/
│   └── posts.ts           # Markdown parsing utilities
└── components/
    └── GoogleAnalytics.tsx # GA integration
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site.

## 📝 Managing Blog Posts

### Adding a New Post

1. Create a new `.md` file in the `/posts` directory
2. Add front matter at the top:

```markdown
---
title: "Your Article Title"
date: "2025-01-06"
slug: "url-friendly-slug"
tags: ["Tag1", "Tag2", "Tag3"]
---

# Your article content here...
```

3. Write your content in Markdown format
4. The post will automatically appear on the homepage

### Post Guidelines

- Use descriptive, SEO-friendly titles
- Include relevant tags for categorization
- Format dates as "YYYY-MM-DD"
- Use proper Markdown headings (start with ##, not #)
- Include images in the `/public` directory if needed

## 🏗️ Building for Production

### Build Static Site

```bash
npm run build
```

This creates an `/out` directory with all static files.

### Preview Production Build

```bash
npm run start
```

## 🚀 Deployment

### Deploy to Nginx (VPS)

1. Build the static site:
```bash
npm run build
```

2. Upload the `/out` directory contents to your server:
```bash
scp -r out/* user@your-server:/var/www/japansimtrip/
```

3. Ensure Nginx is configured to serve from `/var/www/japansimtrip`

### Deploy to Vercel

```bash
vercel
```

### Deploy to Netlify

1. Push to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

## 🔧 Configuration

### SEO Settings

Edit metadata in `app/layout.tsx`:
- Site title and description
- Open Graph tags
- Twitter Card settings

### Google Analytics

Update tracking ID in `components/GoogleAnalytics.tsx`:
```typescript
const GA_MEASUREMENT_ID = 'G-YOUR-ID-HERE';
```

### Domain Settings

Update domain references:
- `app/sitemap.ts` - Update baseUrl
- `app/layout.tsx` - Update metadata URLs

## 📦 Key Dependencies

- **Next.js 14** - React framework
- **Tailwind CSS** - Styling
- **gray-matter** - Parse Markdown front matter
- **remark** - Markdown processing
- **date-fns** - Date formatting

## 🎨 Customization

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component classes use Tailwind utilities

### Adding Pages

Create new files in the `app` directory:
```
app/new-page/page.tsx
```

### Modifying Layout

Edit `app/layout.tsx` to change:
- Navigation menu
- Footer content
- Global layout structure

## 📊 Performance Tips

- Optimize images before adding to `/public`
- Keep Markdown files reasonable in size
- Use proper heading hierarchy in posts
- Minimize external dependencies

## 🐛 Troubleshooting

### Build Errors

- Ensure all Markdown files have valid front matter
- Check for missing dependencies: `npm install`
- Verify Node.js version compatibility

### Styling Issues

- Clear browser cache
- Run `npm run build` to regenerate CSS
- Check Tailwind classes are valid

## 📄 License

This project is open source. Feel free to use and modify for your own blog.

---

Happy blogging! 🇯🇵✈️

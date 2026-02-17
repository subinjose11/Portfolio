# Subin Jose Y - Portfolio

A modern, professional developer portfolio showcasing Flutter/mobile development expertise, built with Next.js and Tailwind CSS.

![Portfolio Preview](public/images/profile.jpg)

## Live Demo

[View Portfolio](https://subinjose11.github.io/Portfolio) *(Update with your deployed URL)*

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Blog:** MDX (next-mdx-remote)
- **Contact Form:** Resend (email API)

## Features

- Responsive design for all screen sizes
- Dark theme with modern UI
- Animated sections with Framer Motion
- MDX-powered blog with syntax highlighting
- Contact form with email integration
- Smooth scroll navigation
- SEO optimized
- Circular profile photo with animated gradient border

## Sections

- **Hero** - Introduction with animated background and social links
- **About** - Bio, tech stack, and stats
- **Skills** - Categorized technical skills with icons
- **Projects** - Featured projects with links
- **Experience** - Work timeline and education
- **Contact** - Contact form and information
- **Blog** - Technical articles and tutorials
- **Resume** - Detailed resume with PDF download

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/subinjose11/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── blog/               # Blog pages
│   ├── resume/             # Resume page
│   └── api/contact/        # Contact form API endpoint
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, About, Skills, Projects, etc.
│   └── ui/                 # Reusable UI components
├── content/
│   ├── projects.ts         # Project data
│   └── blog/               # MDX blog posts
├── lib/                    # Utility functions
└── public/                 # Static assets (images, resume PDF)
```

## Customization

### Profile Information
- `components/sections/About.tsx` - Bio and personal info
- `components/sections/Experience.tsx` - Work history and education
- `content/projects.ts` - Your projects
- `app/resume/page.tsx` - Resume details

### Adding Blog Posts
Create new `.mdx` files in `content/blog/` with frontmatter:
```mdx
---
title: "Your Post Title"
date: "2024-01-01"
excerpt: "A brief description"
tags: ["Flutter", "Dart"]
---

Your content here...
```

### Assets
- Profile photo: `public/images/profile.jpg`
- Resume PDF: `public/resume.pdf`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Add environment variables if needed
4. Deploy!

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| RESEND_API_KEY | Resend API key for contact form emails | Optional |

## Author

**Subin Jose Y**
- GitHub: [@subinjose11](https://github.com/subinjose11)
- LinkedIn: [Subin Jose Y](https://www.linkedin.com/in/subin-jose-y/)
- Email: subinjose911@gmail.com

## License

MIT License

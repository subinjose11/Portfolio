# Subin Jose Y - Portfolio

A modern, professional developer portfolio showcasing Flutter/mobile development expertise, built with Next.js 14+ and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Blog:** MDX (next-mdx-remote)
- **Contact Form:** Resend (email API)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file for environment variables:
```bash
cp .env.example .env.local
```

4. (Optional) Add your Resend API key for the contact form:
```
RESEND_API_KEY=your_resend_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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
│   ├── testimonials.ts     # Testimonials data
│   └── blog/               # MDX blog posts
├── lib/                    # Utility functions
└── public/                 # Static assets
```

## Features

- Responsive design for all screen sizes
- Dark/Light mode toggle
- Animated sections with Framer Motion
- MDX-powered blog
- Contact form with email integration
- SEO optimized
- Smooth scroll navigation

## Customization

### Profile Information
Update the following files to customize the portfolio:
- `content/projects.ts` - Your projects
- `content/testimonials.ts` - Testimonials
- `app/resume/page.tsx` - Resume details
- Component files for contact info, social links, etc.

### Adding Blog Posts
Create new `.mdx` files in `content/blog/` with the following frontmatter:
```mdx
---
title: "Your Post Title"
date: "2024-01-01"
excerpt: "A brief description"
tags: ["tag1", "tag2"]
---

Your content here...
```

### Adding Profile Photo
Replace or add your profile photo at `public/images/profile.jpg`

### Adding Resume PDF
Add your resume PDF at `public/resume.pdf`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Add environment variables (RESEND_API_KEY if using contact form)
4. Deploy!

### Manual Build

```bash
npm run build
npm start
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| RESEND_API_KEY | Resend API key for contact form emails | No (form works without it, logs to console) |

## License

MIT License

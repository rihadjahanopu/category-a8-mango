# 📚 BookLib — Premium Library Management Application

[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Better Auth](https://img.shields.io/badge/Auth-Better_Auth-orange?style=flat-square)](https://better-auth.com/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

A high-performance, full-stack library management application. BookLib provides a seamless platform for browsing cataloged titles, secure user registration and login, dynamic category filtering, and robust profile management. 

🔗 **Live Production Demo:** [category-a8-mango.vercel.app](https://category-a8-mango.vercel.app/)

---

## ✨ Features

*   **⚡ TypeScript Powered:** Fully migrated codebase written in TypeScript for type-safety, robust autocompletion, and high maintainability.
*   **🎨 Premium Responsive UI:** Designed with Tailwind CSS v4 and DaisyUI v5, featuring an immersive homepage, customizable category filtering, smooth slider transitions, and reactive loading skeletons.
*   **🔒 Secure Authentication:** Implemented via [Better Auth](https://better-auth.com/) with MongoDB adapter support. Features secure Email/Password registration/login and native Google OAuth integration.
*   **📁 Reliable Storage:** Clean schema integrations using MongoDB and Mongoose.
*   **🛡️ Robust Form Validation:** Dynamic, type-safe forms powered by `react-hook-form` and `zod`.
*   **🔔 Real-time Feedback:** Smooth notifications using `react-hot-toast` for sign-ups, log-ins, updates, and user actions.

---

## 🛠️ Architecture & Tech Stack

| Layer | Technologies & Libraries |
| :--- | :--- |
| **Framework** | [Next.js 16.2 (App Router)](https://nextjs.org/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling & Theme** | [Tailwind CSS v4](https://tailwindcss.com/) & [DaisyUI v5](https://daisyui.com/) |
| **Authentication** | [Better Auth 1.4](https://better-auth.com/) with MongoDB Adapter |
| **Database** | [MongoDB 7.2](https://www.mongodb.com/) & [Mongoose 9.6](https://mongoosejs.com/) |
| **Form Handling** | [React Hook Form](https://react-hook-form.com/) with Zod validation |
| **Slider UI** | [Swiper](https://swiperjs.com/) |
| **Icons & Toast** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/), [React Hot Toast](https://react-hot-toast.com/) |

---

## 🚀 Getting Started

### Prerequisites

*   **Node.js** (v18.17 or higher recommended)
*   **MongoDB** (local server or Atlas cluster URI)
*   **npm** / **yarn** / **pnpm**

### Installation

1.  **Clone the Repository:**
    ```bash
    git clone <repository-url>
    cd classical-book-library-client-side
    ```

2.  **Install Project Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Configuration:**
    Create a `.env.local` file in the project root:
    ```env
    # Better Auth Keys
    BETTER_AUTH_SECRET="your-better-auth-secret-key"
    BETTER_AUTH_URL="http://localhost:3000"

    # Database
    MONGODB_URI="mongodb://127.0.0.1:27017/booklib"

    # Social Auth Providers (Optional)
    GOOGLE_CLIENT_ID="your-google-client-id"
    GOOGLE_CLIENT_SECRET="your-google-client-secret"
    ```

4.  **Launch the App in Development Mode:**
    ```bash
    npm run dev
    ```
    Access [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 📁 Directory Structure

```text
├── app/                  # Next.js App Router Routes & Page layouts
│   ├── api/              # API Route Handlers (Auth catch-all)
│   ├── books/            # Book Catalog and Detail pages
│   ├── login/            # Authentication Sign-in page
│   ├── profile/          # User Dashboard & Profile edit settings
│   ├── register/         # User Registration page
│   ├── globals.css       # Core Tailwind CSS configuration
│   └── layout.tsx        # Global App wrapper with Toaster & Navbar
├── components/           # Reusable Client/Server React components
│   ├── BookCard.tsx      # Individual book details card
│   ├── FeaturedBooks.tsx # Carousel container for curated selections
│   ├── Footer.tsx        # Structured application footer
│   ├── HeroSection.tsx   # Immersive introduction section
│   └── Navbar.tsx        # Responsive sticky navbar with session status
├── data/                 # Static catalog data JSON
├── lib/                  # Shared configurations (better-auth setup, Mongoose clients)
├── types/                # Core TypeScript Type & Interface declarations
└── tsconfig.json         # TypeScript compiler configurations
```

---

## 🛠️ Build & Deployment

To generate a fully optimized build of the production application:

```bash
npm run build
```

The application can be deployed directly to [Vercel](https://vercel.com/) with native support for Next.js App Router and Better Auth middleware configurations.

---

## 🧩 Component Reference

A breakdown of every reusable component in the `/components` directory — its rendering type, props contract, and responsibility.

| Component | Type | Props | Description |
| :--- | :---: | :--- | :--- |
| [`Navbar.tsx`](./components/Navbar.tsx) | `"use client"` | — | Sticky top navigation bar. Reads the live auth session via `authClient.useSession()` to conditionally render login/logout controls and avatar. Animates background on scroll. |
| [`Footer.tsx`](./components/Footer.tsx) | Server | — | Full-width site footer with newsletter subscription input, categorised navigation links, social icons, and copyright. |
| [`HeroSection.tsx`](./components/HeroSection.tsx) | Server | — | Full-viewport landing hero with animated gradient blobs, background image overlay, headline, and CTA buttons. |
| [`MarqueeSection.tsx`](./components/MarqueeSection.tsx) | Server | — | Infinite horizontal scrolling ticker displaying highlighted book announcements and trending titles. CSS-animation powered, no JS dependency. |
| [`FeaturedBooks.tsx`](./components/FeaturedBooks.tsx) | Server | `featuredBooks: Book[]` | Renders a responsive 4-column grid of `<BookCard>` components from a slice of the static book catalog. |
| [`BookCard.tsx`](./components/BookCard.tsx) | Server | `book: Book` | Individual book tile with cover image (via `next/image`), category badge, availability indicator, and a link to the detail page. Includes hover zoom and lift animation. |
| [`TrendingCategories.tsx`](./components/TrendingCategories.tsx) | Server | — | Full-width 3-column image grid showcasing the primary book categories — Story, Tech, and Science — with overlay reveal on hover. |
| [`TestimonialsSection.tsx`](./components/TestimonialsSection.tsx) | Server | — | Section wrapper providing heading and layout context for the testimonial carousel. |
| [`TestimonialSlider.tsx`](./components/TestimonialSlider.tsx) | `"use client"` | — | Auto-playing Swiper carousel of reader testimonial cards. Responsive breakpoints at sm/md/lg viewports. Renders dicebear avatars via `next/image`. |

---

## 🔄 Component Architecture

The diagram below illustrates how the application's UI layer is composed, from the root layout down to individual leaf components.

```text
app/layout.tsx  (Root Shell)
├── <Navbar />              → auth session → login / user avatar / logout
├── <main>                  → page-level slot (children)
│   │
│   ├── app/page.tsx        (Home Route)
│   │   ├── <HeroSection />
│   │   ├── <MarqueeSection />
│   │   ├── <FeaturedBooks featuredBooks={Book[]} />
│   │   │   └── <BookCard book={Book} />  ×4
│   │   ├── <TrendingCategories />
│   │   └── <TestimonialsSection />
│   │       └── <TestimonialSlider />
│   │
│   ├── app/books/page.tsx  (Catalog Route — client)
│   │   └── <BookCard book={Book} />  ×n  (filtered)
│   │
│   └── app/books/[id]/page.tsx  (Detail Route — client)
│       └── next/image, auth guard, borrow action
│
└── <Footer />              → newsletter, nav links, social icons
```

**Rendering Strategy at a Glance**

| Rendering Model | Components |
| :--- | :--- |
| **React Server Component** | `HeroSection`, `MarqueeSection`, `FeaturedBooks`, `BookCard`, `TrendingCategories`, `TestimonialsSection`, `Footer` |
| **Client Component** (`"use client"`) | `Navbar`, `TestimonialSlider`, `app/books/page.tsx`, `app/books/[id]/page.tsx`, `app/login`, `app/register`, `app/profile` |

> Server components are used by default to maximise performance and reduce the client-side JavaScript bundle. Client components are adopted only where browser APIs, React hooks, or interactive state are required.

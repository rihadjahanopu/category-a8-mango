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

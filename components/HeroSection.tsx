import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"></div>
      <div
        className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse"
        style={{ animationDelay: "2s" }}></div>

      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 dark:opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')",
        }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-100/50 to-base-100"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-20">
        <div className="badge badge-primary badge-outline px-4 py-3 mb-8 shadow-lg bg-base-100/50 backdrop-blur-md border-primary/50 text-sm font-medium">
          ✨ Discover your next favorite story
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral to-neutral-content dark:from-rose-500 dark:to-rose-200">
          Find Your Next <br />{" "}
          <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Great Read
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-80 font-medium max-w-2xl text-base-content leading-relaxed">
          Explore thousands of premium books, from thrilling stories to
          advanced technical guides. Elevate your mind.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/books"
            className="btn btn-primary btn-lg rounded-full px-10 shadow-xl shadow-primary/30 hover:scale-105 transition-transform text-white border-none">
            Browse Collection
          </Link>
          <Link
            href="#featured"
            className="btn btn-outline btn-lg rounded-full px-10 bg-base-100/30 backdrop-blur-md hover:scale-105 transition-transform">
            View Featured
          </Link>
        </div>
      </div>
    </section>
  );
}

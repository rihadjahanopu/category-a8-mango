import BookCard from "./BookCard";
import Link from "next/link";
import { Book } from "@/types";

interface FeaturedBooksProps {
  featuredBooks: Book[];
}

export default function FeaturedBooks({ featuredBooks }: FeaturedBooksProps) {
  return (
    <section
      id="featured"
      className="max-w-7xl mx-auto px-6 w-full scroll-mt-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Featured Books
          </h2>
          <p className="text-lg opacity-70">
            Handpicked selections by our expert curators just for you.
          </p>
        </div>
        <Link
          href="/books"
          className="btn btn-ghost hover:bg-primary/10 hover:text-primary gap-2 rounded-full px-6">
          View all books <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredBooks.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </section>
  );
}

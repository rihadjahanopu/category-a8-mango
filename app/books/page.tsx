"use client";

import { useState } from "react";
import booksData from "@/data/books.json";
import BookCard from "@/components/BookCard";
import { Book } from "@/types";

export default function AllBooks() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Story", "Tech", "Science"];

  const filteredBooks = (booksData as Book[]).filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
      {/* Sidebar - Filters */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="bg-base-200 p-6 rounded-xl sticky top-24">
          <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`btn btn-block justify-start ${
                    selectedCategory === cat ? "btn-primary" : "btn-ghost"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6">All Books</h1>
          <div className="form-control max-w-md">
            <input
              type="text"
              placeholder="Search by title..."
              className="input input-bordered w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {filteredBooks.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl text-gray-500">No books found matching your criteria.</h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

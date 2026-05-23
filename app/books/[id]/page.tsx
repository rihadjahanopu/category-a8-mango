"use client";

import { use, useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import booksData from "@/data/books.json";
import Image from "next/image";
import { Book } from "@/types";

interface BookDetailsProps {
  params: Promise<{ id: string }>;
}

export default function BookDetails({ params }: BookDetailsProps) {
  const { id } = use(params);
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  
  const [toast, setToast] = useState("");
  
  const book = (booksData as Book[]).find((b) => b.id === id);

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending || !session) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Book not found</h1>
      </div>
    );
  }

  const handleBorrow = () => {
    setToast("You have successfully borrowed this book!");
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {toast && (
        <div className="toast toast-top toast-center z-50">
          <div className="alert alert-success text-white">
            <span>{toast}</span>
          </div>
        </div>
      )}
      
      <div className="card lg:card-side bg-base-100 shadow-2xl rounded-3xl overflow-hidden border border-base-200">
        <figure className="relative w-full lg:w-1/2 h-96 lg:h-auto shrink-0">
          <Image
            src={book.image_url}
            alt={book.title}
            fill
            className="object-cover"
            priority
          />
        </figure>
        <div className="card-body p-8 lg:p-12 justify-center">
          <div className="badge badge-primary mb-4">{book.category}</div>
          <h1 className="card-title text-4xl lg:text-5xl font-bold mb-2">{book.title}</h1>
          <p className="text-xl text-gray-500 mb-6">By {book.author}</p>
          
          <div className="divider"></div>
          
          <p className="text-lg leading-relaxed mb-6">
            {book.description}
          </p>
          
          <div className="bg-base-200 p-4 rounded-xl mb-8 flex justify-between items-center">
            <span className="text-lg font-medium">Availability</span>
            <span className="badge badge-secondary badge-lg">{book.available_quantity} Copies Left</span>
          </div>
          
          <div className="card-actions justify-end">
            <button 
              className="btn btn-primary btn-lg w-full sm:w-auto"
              onClick={handleBorrow}
              disabled={book.available_quantity === 0}
            >
              {book.available_quantity === 0 ? "Out of Stock" : "Borrow This Book"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

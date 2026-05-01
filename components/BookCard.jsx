import Link from "next/link";
import Image from "next/image";

export default function BookCard({ book }) {
  return (
    <div className="card bg-base-100 shadow-lg border border-base-200/60 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
      <figure className="relative w-full h-72 overflow-hidden">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 badge badge-primary border-none text-white shadow-lg shadow-primary/30 font-medium px-4 py-3 rounded-full backdrop-blur-md">
          {book.category}
        </div>
      </figure>
      <div className="card-body p-6 bg-gradient-to-b from-base-100 to-base-200/30">
        <h2 className="card-title text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">{book.title}</h2>
        <p className="text-sm font-medium text-gray-500 mb-2 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 30 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          {book.author}
        </p>
        <p className="line-clamp-2 text-sm opacity-80 mt-2 mb-4 leading-relaxed">{book.description}</p>
        <div className="card-actions justify-between items-center mt-auto pt-4 border-t border-base-200">
          <div className="flex items-center gap-1.5 font-medium text-sm">
            <span className={`w-2 h-2 rounded-full ${book.available_quantity > 0 ? 'bg-success shadow-success/50' : 'bg-error shadow-error/50'} shadow-sm`}></span>
            {book.available_quantity > 0 ? `${book.available_quantity} Available` : 'Out of Stock'}
          </div>
          <Link href={`/books/${book.id}`} className="btn btn-primary btn-sm rounded-full px-5 text-white shadow-lg shadow-primary/30 hover:shadow-primary/50">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

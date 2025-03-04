import { BookCard } from "@/components/book-card";
import { BookSkeleton } from "@/components/book-skeleton";
import { Pagination } from "@/components/pagination";
import type { Book } from "@/types/book";

interface BookListProps {
  books: Book[];
  loading: boolean;
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export function BookList({
  books,
  loading,
  totalItems,
  currentPage,
  itemsPerPage,
  onPageChange,
}: BookListProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <BookSkeleton key={index} />
          ))}
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">
          No books found. Try a different search term.
        </p>
      </div>
    );
  }

  const totalPages = Math.ceil(Math.min(totalItems, 100) / itemsPerPage); // Google Books API limits to 100 results

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted-foreground">
        Found {totalItems} results
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}

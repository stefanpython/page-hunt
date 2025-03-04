"use client";

import { useState } from "react";
import { BookList } from "@/components/book-list";
import { SearchBar } from "@/components/search-bar";
import { BookFilters } from "@/components/book-filters";
import type { Book } from "@/types/book";
import type {
  GoogleBooksApiResponse,
  GoogleBookItem,
} from "@/types/google-books-api";

export function BookSearch() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const itemsPerPage = 10;

  const handleSearch = async (
    query: string,
    page = 1,
    filterType: string = filter
  ) => {
    if (!query.trim()) return;

    setLoading(true);
    setSearchQuery(query);
    setCurrentPage(page);
    setFilter(filterType);

    const startIndex = (page - 1) * itemsPerPage;

    let url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      query
    )}&startIndex=${startIndex}&maxResults=${itemsPerPage}`;

    // Add filter if not "all"
    if (filterType !== "all") {
      url += `&filter=${filterType}`;
    } //ss

    try {
      const response = await fetch(url);
      const data: GoogleBooksApiResponse = await response.json();

      if (data.items) {
        setBooks(
          data.items.map((item: GoogleBookItem) => ({
            id: item.id,
            title: item.volumeInfo.title || "Unknown Title",
            authors: item.volumeInfo.authors || ["Unknown Author"],
            description:
              item.volumeInfo.description || "No description available",
            thumbnail:
              item.volumeInfo.imageLinks?.thumbnail ||
              "/placeholder.svg?height=200&width=150",
            publishedDate: item.volumeInfo.publishedDate || "Unknown Date",
            publisher: item.volumeInfo.publisher || "Unknown Publisher",
            pageCount: item.volumeInfo.pageCount || 0,
            categories: item.volumeInfo.categories || [],
            previewLink: item.volumeInfo.previewLink || "",
            infoLink: item.volumeInfo.infoLink || "",
          }))
        );
        setTotalItems(data.totalItems || 0);
      } else {
        setBooks([]);
        setTotalItems(0);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
      setTotalItems(0);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    handleSearch(searchQuery, page, filter);
  };

  const handleFilterChange = (newFilter: string) => {
    handleSearch(searchQuery, 1, newFilter);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-3/4">
          <SearchBar onSearch={(query) => handleSearch(query)} />
        </div>
        <div className="w-full md:w-1/4">
          <BookFilters
            currentFilter={filter}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>

      <BookList
        books={books}
        loading={loading}
        totalItems={totalItems}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

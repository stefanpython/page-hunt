import { BookSearch } from "@/components/book-search";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Book Finder</h1>
      <BookSearch />
    </main>
  );
}

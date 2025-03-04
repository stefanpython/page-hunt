import Image from "next/image";
import type { Book } from "@/types/book";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="relative pt-4 px-4 flex justify-center">
        <div className="relative h-[200px] w-[150px] shadow-md">
          <Image
            src={book.thumbnail || "/placeholder.svg"}
            alt={book.title}
            fill
            className="object-cover"
            sizes="150px"
          />
        </div>
      </div>
      <CardContent className="flex-1 pt-6">
        <h3 className="font-semibold text-lg line-clamp-2">{book.title}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
          {book.authors.join(", ")}
        </p>
        {book.publishedDate && (
          <p className="text-xs text-muted-foreground mt-1">
            {book.publishedDate.substring(0, 4)}
          </p>
        )}
        <p className="text-sm mt-3 line-clamp-3">{book.description}</p>
      </CardContent>
      <CardFooter className="pt-2 pb-4">
        <Button asChild variant="outline" className="w-full">
          <a
            href={book.infoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <span>More Info</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

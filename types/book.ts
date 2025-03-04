export interface Book {
  id: string;
  title: string;
  authors: string[];
  description: string;
  thumbnail: string;
  publishedDate: string;
  publisher: string;
  pageCount: number;
  categories: string[];
  previewLink: string;
  infoLink: string;
}

export interface VolumeInfo {
  title?: string;
  authors?: string[];
  description?: string;
  imageLinks?: {
    thumbnail?: string;
  };
  publishedDate?: string;
  publisher?: string;
  pageCount?: number;
  categories?: string[];
  previewLink?: string;
  infoLink?: string;
}

export interface BookItem {
  id: string;
  title: string;
  authors: string[];
  description: string;
  thumbnail: string;
  publishedDate: string;
  publisher: string;
  pageCount: number;
  categories: string[];
  previewLink: string;
  infoLink: string;
}

export interface GoogleBooksAPIResponse {
  items: BookItem[];
  totalItems: number;
}

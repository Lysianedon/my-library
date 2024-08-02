/**
 * The Book interface represents a book entity with basic details.
 * It includes the book's unique identifier, title, author, description,
 * and status indicating availability.
 */
export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  status: string;
}

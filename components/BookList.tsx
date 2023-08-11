import { Book, BookListProps } from '../app/types';
import SkeletonBook from './SkeletonBook';
import BookItem from './BookItem';


const BookList: React.FC<BookListProps> = ({ books, isLoading }) => {
    if (isLoading) {
      return (
        <div className="space-y-4">
          <SkeletonBook />
          <SkeletonBook />
          <SkeletonBook />
          {/* ...repeat as many times as you need */}
        </div>
      );
    }
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book: Book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    );
  }
  
  export default BookList;
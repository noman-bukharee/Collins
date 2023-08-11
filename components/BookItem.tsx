import { Book } from '../app/types';

interface BookItemProps {
  book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <div className="border p-4">
      <img src={book.imageUrl} alt={book.title} className="w-40 h-40 object-cover mb-4 rounded" />
      <h2 className="text-xl mb-2">{book.title}</h2>
      <p className="text-gray-700 mb-2">{book.description}</p>
      <p className="text-sm font-bold">{book.author}</p>
      <p className="text-green-600 mt-2">${book.price.toFixed(2)}</p>
    </div>
  );
}

export default BookItem;
import { Book } from '../types';

const books: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    description: 'A novel by F. Scott Fitzgerald, set in the Jazz Age of the Roaring Twenties.',
    author: 'F. Scott Fitzgerald',
    price: 10.99,
    imageUrl: 'path_to_image/gatsby.jpg'
  },
  {
    id: 2,
    title: '1984',
    description: 'A dystopian novel by George Orwell about totalitarianism and government surveillance.',
    author: 'George Orwell',
    price: 14.99,
    imageUrl: 'path_to_image/1984.jpg'
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    description: 'A novel by Harper Lee about racial injustice and the loss of innocence.',
    author: 'Harper Lee',
    price: 12.99,
    imageUrl: 'path_to_image/mockingbird.jpg'
  }
  // ... more books
];

export default books;
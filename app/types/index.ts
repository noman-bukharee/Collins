export interface Book {
    id: number;
    title: string;
    description: string;
    author: string,
    price: number,
    imageUrl:string 
  }
  
  export interface BookListProps {
    books: Book[];
    isLoading: boolean;
  }
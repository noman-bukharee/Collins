"use client";
import Banner from '@/components/Banner/page'
import Image from 'next/image'
import BookList from '../components/BookList';
import { Book } from './types';
import { useState, useEffect } from 'react';

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/books")
      .then(res => res.json())
      .then((data: Book[]) => {
        setBooks(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <Banner/>
      <BookList books={books} isLoading={isLoading} />
    </div>
    
  )
}

import React, { useState } from 'react';
import Book from './Book';

function  BookList({ addToCart }) {
  const [books, setBooks] = useState([]);

fetch("https://apiharrybooks-dtni.onrender.com").then((res) => {return res.json()}).then((data)=>{setBooks(data)})

  return (
    
    <div className="book-list">
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title}
          author={book.author}
          price={book.price}
          addToCart={() => addToCart(book)}
          image={book.imagen}
          stock={book.stock}
        />
      ))}
    </div>
  );
}



export default BookList;

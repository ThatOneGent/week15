import React from "react";
import { NewBookForm } from './NewBookForm'

export const BookShelf = (props) => {
    const { bookShelf, updateBookcase } = props;

    const deleteBook = (bookId) => {
        const updatedShelf = {
            ...bookShelf,
            books: bookShelf.books.filter((x) => x.id !== bookId)
        };
        console.log('deletedBook');
        console.log(updatedShelf);
        updateBookcase(updatedShelf);
    };

    const addNewBook = (book) => {
        let newID = Math.floor(1000 + Math.random() * 9000);
        book = {...book, id: newID};
        return updateBookcase({ ...bookShelf, books: [...bookShelf.books, book] })
    };

    const books = () => (

        
        <ul>
            {bookShelf.books.map((book, index) => (
                    <li key={index}>
                        <label>{`${book.title} Author: ${book.author}`}</label>
                        <button onClick={(e) => deleteBook(book.id)}>Delete</button>
                        {console.log('li hit')}
                        {console.log(book.title)}
                    </li>

                ))}

        </ul>

    );

    return (
        <div>
            <h1>{bookShelf.Bookcase}</h1>
            {
                books({ books, shelfId: bookShelf.id, deleteBook })
            }

            <NewBookForm addNewBook={addNewBook} />
            {//delete book case goes here
            }
            <button>Delete Bookshelf</button>
        </div>
    );
};
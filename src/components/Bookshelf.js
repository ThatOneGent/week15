import React from "react";
import { NewBookForm } from './NewBookForm'

export const BookShelf = (props) => {
    const { bookShelf, updateBookcase, deleteBookcase } = props;

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
        book = { ...book, id: newID };
        return updateBookcase({ ...bookShelf, books: [...bookShelf.books, book] })
    };

    const deleteShelf = (shelf) => {

        deleteBookcase(shelf);
    };


    const books = () => (


        <table className="bookshelf-table">
            {bookShelf.books.map((book, index) => (
                <tr key={index}>
                    <td>
                        <label><strong> Title: </strong> {`${book.title}`} &nbsp;&nbsp;&nbsp;  <strong> Author: </strong> {`${book.author}`}</label>
                    </td>
                    <td>
                    <button onClick={(e) => deleteBook(book.id)}>Delete</button>
                    </td>
                    {console.log('li hit')}
                    {console.log(book.title)}
                </tr>

            ))}

        </table>

    );

    return (
        <div className='card border-color-secondary'>
            <h1 className="card-header bg-success">{bookShelf.Bookcase}</h1>
            {/* <h2>{bookShelf.id}</h2>*/}
            <div className="card-body">
                {
                    books({ books, shelfId: bookShelf.id, deleteBook })
                }
            </div>
            <NewBookForm addNewBook={addNewBook} />
            {//delete book case goes here
            }
            <button onClick={(e) => deleteShelf(bookShelf)}>Delete Bookshelf</button>
        </div>
    );
};


/* 
const books = () => (


    <ul>
        {bookShelf.books.map((book, index) => (
            <li key={index}>
                <label><strong> Title: </strong> {`${book.title}`} &nbsp;&nbsp;&nbsp;  <strong> Author: </strong> {`${book.author}`}</label>
                <button onClick={(e) => deleteBook(book.id)}>Delete</button>
                {console.log('li hit')}
                {console.log(book.title)}
            </li>

        ))}

    </ul>

); */
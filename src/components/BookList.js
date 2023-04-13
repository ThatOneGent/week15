import React from 'react';
import { BookShelf } from './Bookshelf';
import { bookApi } from '../rest/BookApi';


export class BookcaseList extends React.Component {
    state = {
        shelves : []
    };

    componentDidMount() {
        this.fetchBookShelf();
    };

    fetchBookShelf = async () => {
        const shelves = await bookApi.get();
        this.setState({shelves});
    };


    updateBookcase = async (updatedShelf) => {
        await bookApi.put(updatedShelf);
        this.fetchBookShelf();
    };

    render() {
        return (
            <div className="bookshelf-list">
                {this.state.shelves.map((bookShelf) => (
                    <BookShelf
                     bookShelf={bookShelf}
                     key={bookShelf.id}
                     updateBookcase={this.updateBookcase}
                     />
                ))}
                
                <button>Add new Bookshelf</button>
            </div>
            
                //add a new book case here
                
            
        )
    }
}

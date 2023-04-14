import React, { Component } from 'react';
import { BookcaseList } from './components/BookList'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/jquery/dist/jquery.js';
import './App.css';


class App extends Component {
    render() {
        return (
            <div>
                <BookcaseList />
            </div>
        )
    }

}
export default App;
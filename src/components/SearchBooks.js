import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../utils/BooksAPI.js'

class SearchBooks extends Component {
//set the initial state of both the query and the books array    

    state= {
        query: '',
        searchedBooks: [], 


    }



//flow:
    //user types in input field, onChange, the API is searched and then returns the results by mapping over them. 
    //need to monitor the query in the input field and then the grid which responds to the input field, making this a controlled component. 
    
    //called when query is changed
    getBooks = event => {
        const query = event.target.value;
        this.setState({ query });
        
    //search API if there is a query and set the shelf to 
       if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        (books.length > 0 && query === this.state.query)
          ? this.setState({ searchedBooks: books}, 
                () =>{this.state.searchedBooks.map((searchedBooks) => {
                searchedBooks.shelf = "none";
                
                 {this.props.books.map((book) => {
                    //something in here is broken because the searchedBooks isn't matching the bookid so the shelf isn't getting rendered
                    searchedBooks.id == book.id ? searchedBooks.shelf = book.shelf : ""
                },
                )}
             })}
            ) 
          : this.setState({ searchedBooks: []});
      },
    );
   

      // if query is empty => reset state to default
    } else this.setState({ searchedBooks: []});
  };

 update_book = (book, shelf) => {
    this.props.onChange(book, shelf)
    
  }




//The user enters text into the input field.
//The onChange event listener invokes the updateQuery() function.
//updateQuery() then calls setState(), merging in the new state to update the component's internal state.
//Because its state has changed, the component re-renders. 
    render() {
      const { query } = this.state
      console.warn('The shelf is: ' + this.state.searchedBooks.shelf)
      
      return(
         <div className="search-books">
            <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            
            <div className="search-books-input-wrapper">

            <input type="text" placeholder="Search by title or author"
			value={query}
			onChange={this.getBooks}
			/>
            </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">

            {this.state.searchedBooks.filter((book =>
                book.shelf !== "wantToRead, currentlyReading, read"
                
            )).map((book) =>
            <Book 
                book={book} 
                key={book.id}
                shelf={book.shelf} 
                onUpdate={(shelf) => {this.update_book(book, shelf)}} 
            />)}
			</ol>
            </div>

        </div>

        )
    }
}




export default SearchBooks
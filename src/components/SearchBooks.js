import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Book from './Book.js'
import * as BooksAPI from '../utils/BooksAPI.js'

class SearchBooks extends Component {
//set the initial state of both the query and the books array    

    state= {
        query: '',
      	searchedBooks: []
    }

//flow:
    //user types in input field, onChange, the API is searched and then returns the results by mapping over them. 
    //need to monitor the query in the input field and then the grid which responds to the input field, making this a controlled component. 
    getBooks = event => {
        const query = event.target.value;
        this.setState({ query });

       if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ searchedBooks: books})
          : this.setState({ searchedBooks: []});
      });

      // if query is empty => reset state to default
    } else this.setState({ searchedBooks: []});
  };
     
 update_book = (book, shelf) => {
    this.props.onChange(book, shelf)
  }
	onUpdate = (book, shelf) => {this.update_book(book, shelf)}

     
             

//To recap how user input affects the ListContacts component's own state:

//The user enters text into the input field.
//The onChange event listener invokes the updateQuery() function.
//updateQuery() then calls setState(), merging in the new state to update the component's internal state.
//Because its state has changed, the ListContacts component re-renders. 
    render() {
      const { query, searchedBooks } = this.state
      return(
         <div className="search-books">
            <div className="search-books-bar">
            <Link className="close-search" to='/'>Close</Link>
            
            <div className="search-books-input-wrapper">
          	
            {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"
			value={query}
			onChange={this.getBooks}
			/>
            </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid"> 
            {this.state.searchedBooks.map((book, index) => (<Book books={books} key={books.id} onUpdate={(shelf) => {this.update_book(book, shelf)}}
			/>))}
            

			</ol>
            </div>

        </div>

        )
    }
}




export default SearchBooks
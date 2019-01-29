import React from 'react'
import './App.css'
import * as BooksAPI from './utils/BooksAPI.js'
import SearchBooks from './components/SearchBooks.js'
import Shelf from './components/Shelf.js'
import { Link, Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books:[],

  }
  componentDidMount() {
      BooksAPI.getAll()
        .then((books) => {
          this.setState(() => ({
        books, 

          }))
        })
  }

  updateShelves = (books) => {
  BooksAPI.getAll().then((books) => {
    this.setState({books: books
     })
    })
  }
  
  
  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.updateShelves(book, shelf)
      this.setState({book})
    })
    }
  

  render() {
    const { books } = this.state
    return (
      <div className="app">
       <Route exact path='/' render={() => (
       		<div className="list-books">
            <div className="list-books-title">
                  <h1>My Books</h1>
            </div>
			      
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
          			<Shelf books={books.filter((book) => (book.shelf === "currentlyReading"))} onChange={this.updateBooks} /> 
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <Shelf books={books.filter((book) => (book.shelf === "wantToRead"))} onChange={this.updateBooks} /> 
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <Shelf books={books.filter((book) => (book.shelf === "read"))} onChange={this.updateBooks} /> 
                </div>
              </div>
            </div>
            <div className="open-search">
            <Link to='/search'>Add a book</Link>
            </div>
            </div>
            )} />

			
      <Route path='/search' render={({history}) => (
      <SearchBooks books={books} onChange={this.updateBooks} />
      )}
      />
      </div>
    )
  }
}

export default BooksApp
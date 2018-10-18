import React, { Component } from 'react'
import Book from './Book.js'
import PropTypes from 'prop-types';

class Shelf extends Component {

  static propTypes = {
        books: PropTypes.array.isRequired,
    }
  update_book = (book, shelf) => {
    this.props.onChange(book, shelf)
  }

  
  render() {
  const { books } = this.props

    return (
    	<div>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map((book, index) => (<Book book={book} key={book.id} onUpdate={(shelf) => {this.update_book(book, shelf)}}
                />))}
                
            </ol>
          </div>
      	</div>
    )
  }
}

export default Shelf
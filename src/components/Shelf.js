import React, { Component } from 'react'
import Book from './Book.js'
import PropTypes from 'prop-types';

class Shelf extends Component {
      static propTypes = {
        books: PropTypes.array.isRequired,
    }
  update_book = (book, shelf) => {
    this.props.onChange(book, shelf)
    console.warn(book)
  }

  render() {
	const { books } = this.props
    return (
    	<div>
	
      		{books.map((book, index) => (<Book books={books} key={books.id} onUpdate={()=>{this.update_book(books)}} />))}
      	</div>
    )
  }
}

export default Shelf

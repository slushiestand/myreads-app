import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger.js'
import PropTypes from 'prop-types';

class Book extends Component {
      static propTypes = {
        book: PropTypes.object.isRequired,
    }


  render() {
	const { book } = this.props
    return (
    	<div>
	
      		<div className="bookshelf-books">
                        <div className="books-grid">
                                <div key={book.title} className="book">
                                    <div className="book-top" 
                                    style={{backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                        }}>
                                    <div className="book-shelf-changer">
                                        <ShelfChanger onUpdate={this.props.onUpdate} />
                                    </div>
                                    </div>
                                    <div className="book-title"> {book.title} </div>
                                    <div className="book-authors">{book.authors[0]} </div>
                                </div>
                        </div>
                    </div>
      	</div>
    )
  }
}

export default Book
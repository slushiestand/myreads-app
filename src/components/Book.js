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
            <li>
                <div key={book.title} className="book">
                    <div className="book-top" 
                    style={{backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : null})` 
                        }}>
                    <div className="book-shelf-changer">
                        <ShelfChanger book={this.props.book} onUpdate={this.props.onUpdate} />
                    </div>
                    </div>
                    <div className="book-title"> {book.title} </div>
                    <div className="book-authors">{book.authors} </div>
                    <div> <p> {book.shelf} </p></div>
                </div>
            </li>
      	</div>
    )
  }
}

export default Book
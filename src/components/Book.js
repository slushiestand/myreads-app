import React from 'react'
import ShelfChanger from './ShelfChanger.js'
import PropTypes from 'prop-types';

const Book = (props) => {
    const { book } = props
    return (
    	<div>
            <li>
                <div key={book.title} className="book">
                    <div className="book-top" 
                    style={{backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : null})` 
                        }}>
                    <div className="book-shelf-changer">
                        <ShelfChanger book={props.book} onUpdate={props.onUpdate} />
                    </div>
                    </div>
                    <div className="book-title"> {book.title} </div>
                    <div className="book-authors">{book.authors} </div>
                    <div> <p> {book.shelf} </p></div>
                </div>
            </li>
      	</div>
    );
}


Book.propTypes = {
    book: PropTypes.object.isRequired,
}

export default Book
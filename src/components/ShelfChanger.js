import React, {Component} from 'react'


class ShelfChanger extends Component {

  // on selecting the value, assign the value to that book and then update the books. 
	changeShelf = (e, book) => {
     this.props.onUpdate(e.target.value, book);
    }

  render() {
    const { book } = this.props
    return (
            <div>
              <select value={book.shelf} onChange={this.changeShelf} >
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
     	 	</div>
      )
  }
}
export default ShelfChanger
import React, { Component } from 'react'

class ShelfControl extends Component {
    render() {
        return(
            <div className="book-shelf-changer">
                <select defaultValue={this.props.book.shelf ? this.props.book.shelf : "none"} onChange={(event) => this.props.changeShelf(this.props.book, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default ShelfControl
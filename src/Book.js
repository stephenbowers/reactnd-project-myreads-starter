import React, { Component } from 'react'
import ShelfControl from './ShelfControl'

class Book extends Component {
    render() {
        return( 
                <div className="book">
                    <div className="book-top">
                        {this.props.book.imageLinks ? (
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 
                                `url('${this.props.book.imageLinks.smallThumbnail}')` }}></div>
                        ) : (
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 
                                `url('')` }}></div>
                        )}
                            
                        <ShelfControl
                            book={this.props.book}
                            currentShelf={this.props.currentShelf}
                            changeShelf={this.props.changeShelf}
                        />
                    </div>
                    <div className="book-title">
                        {this.props.book.title}
                        {this.props.book.subtitle && `: ${this.props.book.subtitle}`
                        }
                    </div>
                        {this.props.book.authors &&
                        <div className="book-authors">{this.props.book.authors}</div>
                        }
                </div>
        )
    }
}

export default Book
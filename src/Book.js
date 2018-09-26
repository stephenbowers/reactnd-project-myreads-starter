import React, { Component } from 'react'
import ShelfControl from './ShelfControl'

const Book = (props) => {
        return( 
                <div className="book">
                    <div className="book-top">
                        {props.book.imageLinks ? (
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 
                                `url('${props.book.imageLinks.smallThumbnail}')` }}></div>
                        ) : (
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 
                                `url('')` }}></div>
                        )}
                            
                        <ShelfControl
                            book={props.book}
                            currentShelf={props.currentShelf}
                            changeShelf={props.changeShelf}
                        />
                    </div>
                    <div className="book-title">
                        {props.book.title}
                        {props.book.subtitle && `: ${props.book.subtitle}`
                        }
                    </div>
                        {props.book.authors &&
                        <div className="book-authors">{props.book.authors}</div>
                        }
                </div>
        )
}

export default Book
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
// import Title from './Title'
import './Search.css'

class Search extends Component {
    state = {
        query: ''
    }

    updateQuery = (query) => {
        /* this.setState({ query: query.trim() }) */
        this.setState({ query })
    }

    render() {
        const { books } = this.props
        const { query } = this.state

        let showingBooks
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            // TODO: Make search work for author
            showingBooks = books.filter((book) => match.test(book.title || book.subtitle))
            console.log(books)
        } else {
            showingBooks = ''
        }

        return (
            <div className='search-container'>
                {/*<Title />*/}
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className='close-search' to='/'>Close</Link>
                        <div className="search-books-input-wrapper">
                        {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't     worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                            />
                        </div>
                    </div>
                <div className="search-books-results">
                        <span>Found {showingBooks.length} result{showingBooks.length !== 1 && 's'}.</span>
                    <ol className="books-grid">
                        {showingBooks.length > 0 &&
                            showingBooks.map((book) => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, 
                                        backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                                        <div className="book-shelf-changer">
                                            <select>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">
                                    {book.title}
                                    {book.subtitle &&
                                    `: ${book.subtitle}`
                                    }
                                    </div>
                                    {book.authors &&
                                    <div className="book-authors">{book.authors}</div>
                                    }
                                </div>
                            </li>
                        ))}
                    </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
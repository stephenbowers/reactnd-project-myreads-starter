import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import intersectionBy from 'lodash.intersectionby'
import uniqBy from 'lodash.uniqby'

class Search extends Component {
    state = {
        query: '',
        searchResults: []
    }

    updateQuery = (query) => {
        this.setState({ query: query })
        this.getSearchResults(query)
    }

   getSearchResults = (query) => {
    if (this.state.query && query !== '') {
        BooksAPI.search(query).then(searchResults => {
            if (searchResults.error) return
            const duplicateBooks = intersectionBy(this.props.books, searchResults, 'id')
            const updatedResults = uniqBy(duplicateBooks.concat(searchResults), 'id')
            this.setState({ searchResults: updatedResults })
        })
    } else {
        this.setState({ searchResults: [] })
    }
   }

    render() {
        return (
            <div className="search-container">
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className='close-search' to='/'>Close</Link>
                        <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                            />
                        </div>
                    </div>
                <div className="search-books-results">

                        <span>{this.state.searchResults.length} result{this.state.searchResults.length !== 1 && 's'} shown.</span>
                    <ol className="books-grid">
                        {this.state.searchResults.length > 0 &&
                            this.state.searchResults.map((searchResult) => (
                            <li key={searchResult.id}>
                                    <Book 
                                        book={searchResult}
                                        changeShelf={this.props.changeShelf}
                                    />
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
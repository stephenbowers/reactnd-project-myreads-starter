import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    // Get all books and store in variable
    books: [],
    currentBooks: [],
    wantedBooks: [],
    readBooks: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books)
    })
  }
  // Add book to currentBooks
  addCurrentBook(book) {

  }
  // Add book to wantedBooks
  addWantedBook(book) {

  }
  // Add book to readBooks
  addReadBook(book) {

  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Bookshelf
            onAddCurrentBook={this.addCurrentBook}
            currentBooks={this.state.currentBooks}
            onAddWantedBook={this.addWantedBook}
            wantedBooks={this.state.currentBooks}
            onAddReadBook={this.addReadBook}
            readBooks={this.state.readBooks}
          />
        )}/>
        <Route path='/search' render={({ history }) => (
          <Search
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp

import React from 'react'
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
    })
  }

  // TODO: Add function for search here?


  // Add book to currentBooks
  addCurrentBook(book) {
    this.setState({
      shelf: 'currentlyReading'
    })
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
            onAddCurrentBook={this.addCurrentBook}
            currentBooks={this.state.currentBooks}
            onAddWantedBook={this.addWantedBook}
            wantedBooks={this.state.currentBooks}
            onAddReadBook={this.addReadBook}
            readBooks={this.state.readBooks}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp

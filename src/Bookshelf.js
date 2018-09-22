import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'
import CurrentlyReadingShelf from './CurrentlyReadingShelf'
import WantToReadShelf from './WantToReadShelf'
import ReadShelf from './ReadShelf'

class Bookshelf extends Component {
    render() {

      return (
      <div>
      <Title />
        <div className='list-books'>
          <div className='list-books-content'>
            <div>
              <CurrentlyReadingShelf />
              <WantToReadShelf />
              <ReadShelf />
            </div>
          </div>
          <div className="open-search">
            <Link
              to='/search'
            >Add a book</Link>
          </div>
        </div>
      </div>
        )
    }
}

export default Bookshelf
import React, { Component } from 'react'
import '../index.css'

class Search extends Component{

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchFn(this.query.value)
    e.currentTarget.reset()
  }

  render(){
    return (
      <div>
        <form className='search-form' onSubmit={this.handleSubmit}>
          <input placeholder='Search' ref={(input) => this.query = input}></input>
          <button type='submit'></button>
        </form>
      </div>
    )
  }
}

export default Search

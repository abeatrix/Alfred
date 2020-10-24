import React from 'react';

class Search extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} class="form-inline d-flex justify-content-center md-form form-sm active-pink active-pink-2 mt-2" style={{padding: '2%'}}>
          <i class="fas fa-search" aria-hidden="true"></i>
          <input class="form-control form-control-sm ml-3 w-75"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={this.props.query}
              onInput={this.props.handleInput}
              name ="query" />
          <input type='submit' className='btn' />
      </form>
    );
  }

}
export default Search;
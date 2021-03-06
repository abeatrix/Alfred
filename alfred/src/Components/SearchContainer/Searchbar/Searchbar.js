import React from 'react';

class Search extends React.Component {
  state = {
    openAddForm: false,
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="form-inline d-flex justify-content-center md-form form-sm active-pink active-pink-2 mt-2" style={{padding: '2%'}}>
          <i className="fas fa-search" aria-hidden="true"></i>
          <input className="form-control form-control-sm ml-3 w-75"
              type="text"
              placeholder="Symbol Lookup"
              aria-label="Search"
              value={this.props.query}
              onInput={this.props.handleInput}
              name ="query" />
          <input type='submit' onClick={() => this.setState({openAddForm: true})} className='btn' />
      </form>
    );
  }

}
export default Search;

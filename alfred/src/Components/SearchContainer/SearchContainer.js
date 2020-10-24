import React from 'react';
import Searchbar from '../SearchContainer/Searchbar/Searchbar';
import PolygonModel from '../../Model/PolygonModel';
import Results from '../SearchContainer/Results/Results';

class SearchContainer extends React.Component {
    state = {
        query: '',
        searched: false,
        results: null,
    }

    componentDidUpdate(){
    }

    handleInput = (event) => {
        this.setState({
        query: event.target.value,
        searched: false,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        PolygonModel.search(this.state.query).then(response => {
            this.setState({
                searched: true,
                results: response.data
            })
        })
    }


    render() {
        return (
        <>
            <Searchbar
            query={this.state.query}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}/>
            <div className="">
            {this.state.searched ?
            <div class="jumbotron jumbotron-fluid text-center" style={{margin: '3%'}}>
                <Results data={this.state.results} />
            </div> : null}
            </div>
        </>
        );
    }
}

export default SearchContainer;

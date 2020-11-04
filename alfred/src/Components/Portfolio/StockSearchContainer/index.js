import React from 'react';
import PolygonModel from '../../../Model/PolygonModel';
import StockSearchbar from './Components/StockSearchbar'
import StockSearchResult from './Components/StockSearchbar'

class StockSearchContainer extends React.Component {
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
            <StockSearchbar
            query={this.state.query}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}/>
            {this.state.searched ?
            <StockSearchResult data={this.state.results} /> : null}
        </>
        );
    }
}

export default StockSearchContainer;

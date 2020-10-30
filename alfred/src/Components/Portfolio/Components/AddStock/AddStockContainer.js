import React from 'react';
import {AddaStock} from './AddStock';
import PolygonModel from '../../../../Model/PolygonModel';

class AddStockContainer extends React.Component {
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
            <AddaStock
            query={this.state.query}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}/>

        </>
        );
    }
}

export default AddStockContainer;

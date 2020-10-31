import React from 'react';
import Searchbar from '../SearchContainer/Searchbar/Searchbar';
import PolygonModel from '../../Model/PolygonModel';
import Results from '../SearchContainer/Results/Results';
import { Card } from 'react-bootstrap';
import HSBar from "react-horizontal-stacked-bar-chart";

class SearchContainer extends React.Component {
    state = {
        query: '',
        searched: false,
        results: null,
        getinfo: false,
        info: null,
    }

    componentDidUpdate(){
    }

    search = () =>{
        PolygonModel.search(this.state.query)
        .then(response => {
            this.setState({
                getinfo: true,
                info: response.data
            })
        })
    }

    handleInput = (event) => {
        this.setState({
            query: event.target.value,
            searched: false,
        }, () => this.search())
    }

    handleSubmit = (event) => {
        event.preventDefault();
        PolygonModel.search(this.state.query).then(response => {
            this.setState({
                searched: true,
                results: response.data,
                getinfo: false,
                info: null,
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
            {this.state.getinfo ?
                <Card style={{ margin: '5%' }}>
                    <Card.Body>
                        <p>Searching...</p>
                        <p>{this.state.info.symbol}: {this.state.info.companyName}</p>
                        <p>This Month Advise from Top Analysts:</p>
                        <HSBar data={[{ value: 10 }, { value: 20 }]} />
                    </Card.Body>
                </Card>
                : null}
            {this.state.searched ?
            <Results data={this.state.results} /> : null}
        </>
        );
    }
}

export default SearchContainer;

import React from 'react';
import Searchbar from '../SearchContainer/Searchbar/Searchbar';
import PolygonModel from '../../Model/PolygonModel';
import Results from '../SearchContainer/Results/Results';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import HSBar from "react-horizontal-stacked-bar-chart";

class SearchContainer extends React.Component {
    state = {
        query: '',
        searched: false,
        results: null,
        getinfo: false,
        info: null,
        buy: 0,
        sell: 0,
        chart: false,
        chartinfo: '',
    }

    componentDidUpdate(){
    }

    recommendation = () =>{
        if(this.state.chart) {
            const symbol = this.state.chartinfo
            const res = axios(`https://cloud.iexapis.com/stable/stock/${symbol}/chart/1y/?token=${process.env.REACT_APP_IEX_API_KEY}`);
            console.log(res)
            const ibuy = parseInt(res.buy)
            const isell = parseInt(res.sell)
            this.setState({ buy: ibuy, sell: isell, chart: false });
        }
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
            chartinfo: event.target.value,
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
                chart: true,
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
                    </Card.Body>
                </Card>
                : null}
            {this.state.searched ?
            <Results data={this.state.results} /> : null}
            { this.state.buy >0 ? <HSBar data={[{ value: this.state.buy }, { value: this.state.sell }]} /> : null }
        </>
        );
    }
}

export default SearchContainer;

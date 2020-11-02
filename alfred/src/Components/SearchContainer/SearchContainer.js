import React from 'react';
import Searchbar from '../SearchContainer/Searchbar/Searchbar';
import PolygonModel from '../../Model/PolygonModel';
import Results from '../SearchContainer/Results/Results';
import { Card, ProgressBar } from 'react-bootstrap';
import axios from 'axios';

class SearchContainer extends React.Component {
    state = {
        query: '',
        searched: false,
        results: null,
        getinfo: false,
        info: null,
        chart: false,
        chartinfo: '',
    }

    recommendation = () =>{
        if(this.state.chart) {
            const symbol = this.state.chartinfo
            const res = axios(`https://finnhub.io/api/v1/stock/recommendation?symbol=${symbol}&token=${process.env.REACT_APP_FINNHUB_API_KEY}`)
            .then(result =>
                {
                    this.setState({
                        chartinfo: result.data[0]
                        })

                // return (
                //     this.state.chartinfo = result.data[0]
                // )
                })
            .catch(error => { console.error(error); return Promise.reject(error); });
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
            }, () => {
                this.recommendation()
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
            <Results data={this.state.results} />
            : null}
            { this.state.chartinfo ?
                <Card style={{ margin: '5%' }}>
                    <ProgressBar>
                        <ProgressBar striped variant="success" now={this.state.chartinfo.buy} key={1} label={this.state.chartinfo.buy}/>
                        <ProgressBar variant="warning" now={this.state.chartinfo.hold} key={2} label={this.state.chartinfo.hold} />
                        <ProgressBar striped variant="danger" now={this.state.chartinfo.sell} key={3} label={this.state.chartinfo.sell} />
                    </ProgressBar>
                </Card>
            : null }
        </>
        );
    }
}

export default SearchContainer;

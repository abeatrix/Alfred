import React from "react";
import { Line, Bar, Radar } from 'react-chartjs-2';
import { ProgressBar, Dropdown, Card, Form, Button, Table } from 'react-bootstrap';
import SearchContainer from '../SearchContainer/SearchContainer'
import HotIndexList from './Components/HotStocks/HotIndexList'
import { PageContainer, PageWrapper, DashboardContainer, PortfolioContainer, PortSideBarContainer, PortNotSideBarContainer, AddaStockBtnsWrapper } from './PortfolioElements';
import {netGainData, netGainOptions, hotStocksData} from './Components/Data';
import {HotStocks} from './Components/HotStocks/index';
import {AddaStock} from './Components/AddStock'
import {NewsSection} from './Dashboard/NewsSection'
import Profile from '../Profile'


const wsMNETURL = 'ws://stocks.mnet.website/';


class PortfolioPage extends React.Component {

  state = {
     stocks: {},
     market_trend: undefined,
     api_status: false
    }

    isWsConencted = () => {
        return this.state.stocks.length == 0;
    }

    componentDidMount = () => {
        const socket = new WebSocket(wsMNETURL);
        socket.onmessage = this.savingWsStocks;
        socket.onclose = () => { this.setState({api_status: true}) }
    }

    savingWsStocks = (event) => {
        let result = JSON.parse(event.data);
        let [priceUp, priceDown] = [0, 0];
        let current_time = Date.now();
        let new_stocks = this.state.stocks
        result.map((stock) =>
        {
            if(this.state.stocks[stock[0]])
            {
            new_stocks[stock[0]].current_value > Number(stock[1]) ? priceUp++ : priceDown++;
            new_stocks[stock[0]].current_value = Number(stock[1])
            new_stocks[stock[0]].stats.push({time: current_time, value: Number(stock[1])})
            }
            else
            {
            new_stocks[stock[0]] = { current_value: stock[1], stats: [{time: Date.now(), value: Number(stock[1])}] }
            }
        });
        this.setState({stocks: new_stocks, market_trend: this.marketTrend(priceUp, priceDown)})
    }

    marketTrend = (priceUp, priceDown) => {
        if(priceUp === priceDown) return undefined;
        return priceUp > priceDown ? 'up' : 'down'
    }

    render() {
        return (
        <div>
            <PageContainer>
                <PageWrapper>
                    <PortSideBarContainer>
                    <AddaStock />
                    <HotStocks />
                    <HotIndexList
                    stocks={this.state.stocks}
                    marketTrend={this.marketTrend}
                    isWsConencted={this.isWsConencted}/>

                    <Card style={{ margin: '5%' }}>
                            <Card.Body>
                            <Card.Title>Portfolio Diversity</Card.Title>
                        <Radar data={netGainData} options={netGainOptions} height={280}/>
                    </Card.Body>
                    </Card>

                    </PortSideBarContainer>




                    <PortNotSideBarContainer>

                        <Profile/>
                        <NewsSection/>
                    </PortNotSideBarContainer>
            </PageWrapper>
        </PageContainer>

      </div>
    );
  }
}

export default PortfolioPage;

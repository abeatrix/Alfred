import React from "react";
import { ProgressBar, Dropdown, Card, Form, Button, Table } from 'react-bootstrap';
import SearchContainer from '../SearchContainer/SearchContainer'
import HotIndexList from './Components/HotStocks/HotIndexList'
import { PageContainer, PageWrapper, DashboardContainer, PortfolioContainer, PortSideBarContainer, PortNotSideBarContainer, AddaStockBtnsWrapper } from './PortfolioElements';
import {HotStocks} from './Components/HotStocks/index';
import {NewsSection} from './Dashboard/NewsSection'
import PortfolioDiversity from './Components/PortfolioDiversity/index'
import StockSearchContainer from './StockSearchContainer/index'
import {Profile} from '../Profile'


const wsMNETURL = 'ws://stocks.mnet.website/';


class PortfolioPage extends React.Component {

    state = {
        stocks: {},
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
        let current_time = Date.now();
        let new_stocks = this.state.stocks
        result.map((stock) =>
        {
            if(this.state.stocks[stock[0]])
            {
            new_stocks[stock[0]].current_value = Number(stock[1])
            new_stocks[stock[0]].stats.push({time: current_time, value: Number(stock[1])})
            }
            else
            {
            new_stocks[stock[0]] = { current_value: stock[1], stats: [{time: Date.now(), value: Number(stock[1])}] }
            }
        });
        this.setState({stocks: new_stocks})
    }

    render() {
        return (
        <div>
            <PageContainer>
                <PageWrapper>
                    <PortSideBarContainer>
                        <SearchContainer/>
                        <HotStocks />
                        <HotIndexList
                        stocks={this.state.stocks}
                        marketTrend={this.marketTrend}
                        isWsConencted={this.isWsConencted}/>
                        <PortfolioDiversity/>

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

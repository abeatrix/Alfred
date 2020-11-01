import React, { useEffect, useState } from "react";
import { ProgressBar, Dropdown, Card, Form, Button, Table } from 'react-bootstrap';
import SearchContainer from '../SearchContainer/SearchContainer'
import HotIndexList from './Components/HotStocks/HotIndexList'
import { PageContainer, PageWrapper, DashboardContainer, PortfolioContainer, PortSideBarContainer, PortNotSideBarContainer, AddaStockBtnsWrapper } from './PortfolioElements';
import {HotStocks} from './Components/HotStocks/index';
import {NewsSection} from './Dashboard/NewsSection'
import {Chatroom} from '../chatbox/index'
import axios from 'axios';
import PortfolioDiversity from './Components/PortfolioDiversity/index'
import StockSearchContainer from './StockSearchContainer/index'
import {Profile} from '../Profile'

const wsMNETURL = 'ws://stocks.mnet.website/';



class PortfolioPage extends React.Component {



    state = {
        stocks: {},
        api_status: false,
        market: true
    }

    isWsConencted = () => {
        return this.state.stocks.length == 0;
    }

    componentDidMount = () => {
        const socket = new WebSocket(wsMNETURL);
        socket.onmessage = this.savingWsStocks;
        socket.onclose = () => { this.setState({api_status: true}) }
        // axios.get(`https://api.polygon.io/v1/marketstatus/now?apiKey=gqf23sEvmyZ8hzWDeBRy5TedKBU03kF5`, {headers: {"Access-Control-Allow-Origin": "*"}})
        // .then(res => {
        //     console.log(res.market)
        //     // setportstockData({
        //     //     ...portstockData,
        //     //     marketprice: parseInt(res.data.quote.latestPrice),
        //     //     totalvalue: parseInt(portstockData.marketprice)*parseInt(props.data.quantity),
        //     //     cost: parseInt(props.data.quantity)*parseInt(props.data.avgcost),
        //     //     gains: parseInt(portstockData.totalvalue)-parseInt(portstockData.cost),
        //     //     loaded: true
        //     // })
        // });
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
                        {/* <Chatroom /> */}
                        <HotIndexList
                        stocks={this.state.stocks}
                        marketTrend={this.marketTrend}
                        isWsConencted={this.isWsConencted}/>
                        {/* <PortfolioDiversity/> */}
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

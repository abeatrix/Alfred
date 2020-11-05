import React from "react";
import SearchContainer from '../SearchContainer/SearchContainer'
import HotIndexList from './Components/HotStocks/HotIndexList'
import { PageContainer, PageWrapper, PortSideBarContainer, PortNotSideBarContainer } from './PortfolioElements';
import {HotStocks} from './Components/HotStocks/index';
import {NewsSection} from './Dashboard/NewsSection'
import {Chatroom} from '../chatbox/index'
import {isAuth} from '../../config/auth'
import {Portfolio} from '../Portfolio/Dashboard/Portfolio'

const wsMNETURL = 'ws://stocks.mnet.website/'

class PortfolioPage extends React.Component {
    state = {
        stocks: {},
        api_status: false,
        market: true,
        marketHour: true,
        userId: isAuth()
    }

    isWsConencted = () => {
        return this.state.stocks.length == 0;
    }

    isUserReady = () => {
        return this.state.userId != undefined;
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
        // console.log(this.props)
        return (
            <div>
            <PageContainer>
                <PageWrapper>
                    <PortSideBarContainer>
                        <SearchContainer/>
                        <HotStocks live={this.props.live}/>
                        <Chatroom />
                        <HotIndexList
                        stocks={this.state.stocks}
                        isWsConencted={this.isWsConencted}/>
                        {/* <PortfolioDiversity/> */}
                    </PortSideBarContainer>


                    <PortNotSideBarContainer>
                        <Portfolio userId={this.state.userId} />
                        <NewsSection/>
                    </PortNotSideBarContainer>
                </PageWrapper>
            </PageContainer>
            </div>
        );
    }
}

export default PortfolioPage;

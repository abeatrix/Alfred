import React from "react";
import { ProgressBar, Dropdown, Card, Form, Button, Table } from 'react-bootstrap';
import SearchContainer from '../SearchContainer/SearchContainer'
import {isAuth} from '../../config/auth'
import usePortfolio from '../../hooks/usePortfolio'
import axios from 'axios';
import PortfolioStockList from '../../Components/Portfolio/Dashboard/PortfolioStockList'
import { DashboardContainer, PortfolioContainer } from '../Portfolio/PortfolioElements';

// const wsFinnHub = `wss://ws.finnhub.io?token=${process.env.REACT_APP_FINNHUB_API_KEY}`
const wsFinnHub = `wss://socket.polygon.io/stocks`

const socket = new WebSocket(wsFinnHub);
console.log(socket)

const user = isAuth()
const userId = user._id

export  const Profile = () => {

    const [portfolio, setPortfolio] = usePortfolio(userId);

    // componentDidMount = () => {
    //     // socket.onmessage = this.displayStocks;
    //     socket.onclose = () => { console.log('websocket connected')}
    // }

    // displayStocks = () => {
    //     let result = socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
    //     console.log(result)
    // }


        return (
        <div>
                    {/* <DashboardContainer>
                    </DashboardContainer> */}

                    <PortfolioContainer>

                        <PortfolioStockList data={portfolio}/>

                    </PortfolioContainer>
        </div>
    );

}

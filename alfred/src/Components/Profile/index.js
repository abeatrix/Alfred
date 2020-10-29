import React from "react";
import { ProgressBar, Dropdown, Card, Form, Button, Table } from 'react-bootstrap';
import SearchContainer from '../SearchContainer/SearchContainer'
import axios from 'axios';
import { PageContainer, PageWrapper, DashboardContainer, PortfolioContainer, PortSideBarContainer, PortNotSideBarContainer, AddaStockBtnsWrapper } from '../Portfolio/PortfolioElements';
import { useState, useEffect } from "react";

const wsFinnHub = `wss://ws.finnhub.io?token=${process.env.REACT_APP_FINNHUB_API_KEY}`
const socket = new WebSocket(wsFinnHub);
console.log(socket)
class Profile extends React.Component {

    componentDidMount = () => {
        socket.onmessage =  () => { console.log('hi')};
        // socket.onmessage = this.displayStocks;
        socket.onclose = () => { console.log('websocket connected')}
    }

    displayStocks = () => {
        let result = socket.send(JSON.stringify({
            symbol: 'AAPL'
        }))
        console.log(result)
    }



    render() {
        return (
        <div>
                    <DashboardContainer>
                        <SearchContainer />
                    </DashboardContainer>

                    <PortfolioContainer>


                    </PortfolioContainer>
        </div>
    );
        }

}

export default Profile;

import React from "react";
import { ProgressBar, Dropdown, Card, Form, Button, Table } from 'react-bootstrap';
import SearchContainer from '../SearchContainer/SearchContainer'
import axios from 'axios';
import { PageContainer, PageWrapper, DashboardContainer, PortfolioContainer, PortSideBarContainer, PortNotSideBarContainer, AddaStockBtnsWrapper } from '../Portfolio/PortfolioElements';
import { useState, useEffect } from "react";



function Profile () {

    const [response, setResponse] = useState("");

    useEffect(() => {
        const socket = `wss://ws.finnhub.io?token=${process.env.REACT_APP_FINNHUB_API_KEY}`
        socket.on("FromAPI", data => {
        setResponse(data);
        });
    }, []);




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

export default Profile;

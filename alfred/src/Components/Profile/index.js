import React from "react";
import { ProgressBar, Dropdown, Card, Form, Button, Table } from 'react-bootstrap';
import SearchContainer from '../SearchContainer/SearchContainer'
import {isAuth} from '../../config/auth'
import UserModel from '../../Model/UserModel'
import usePortfolio from '../../hooks/usePortfolio'
import axios from 'axios';
import PortfolioStockList from '../../Components/Portfolio/Dashboard/PortfolioStockList'
import { DashboardContainer, PortfolioContainer } from '../Portfolio/PortfolioElements';

export const Profile = () => {
    const user = isAuth()
    const userId = user._id
    const [portfolio, setPortfolio] = usePortfolio(userId);


    return (
        <div>
                    {/* <DashboardContainer>
                    </DashboardContainer> */}

                    <PortfolioContainer>

                        {/* {(portfolio) ? <PortfolioStockList data={portfolio}/> : 'Loading'} */}

                    </PortfolioContainer>
        </div>
    );

}


import React from "react";
import { Spinner } from 'react-bootstrap';
import {isAuth} from '../../../config/auth'
import usePortfolio from '../../../hooks/usePortfolio'
import PortfolioStockList from './PortfolioStockList'
import { DashboardContainer, PortfolioContainer } from '../PortfolioElements';

export const Portfolio = () => {
    const user = isAuth()
    const userId = user._id
    const [portfolio, setPortfolio] = usePortfolio(userId);


    return (
        <div>
                    <DashboardContainer>
                    </DashboardContainer>

                    <PortfolioContainer>

                        {(portfolio) ? <PortfolioStockList data={portfolio}/> : <Spinner animation="grow" />}

                    </PortfolioContainer>
        </div>
    );

}


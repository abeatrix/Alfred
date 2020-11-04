import React from "react";
import { Spinner } from 'react-bootstrap';
import {PageContainer, PageWrapper, PortSideBarContainer, PortNotSideBarContainer} from '../Portfolio/PortfolioElements'
import {Chatroom} from '../chatbox/index'
import usePortfolio from '../../hooks/usePortfolio'
import SearchContainer from '../SearchContainer/SearchContainer'
import {isAuth} from '../../config/auth'
import PortfolioStockList from '../Portfolio/Dashboard/PortfolioStockList'


export const Profile = () => {
    const user = isAuth()
    const userId = user._id
    const [portfolio, setPortfolio] = usePortfolio(userId);

    return (
        <div>

            <PageContainer>
                <PageWrapper>
                    <PortSideBarContainer>
                        <SearchContainer/>
                        <Chatroom />
                    </PortSideBarContainer>


                    <PortNotSideBarContainer>
                        {(portfolio) ? <PortfolioStockList data={portfolio}/> : <Spinner animation="grow" />}
                    </PortNotSideBarContainer>
                </PageWrapper>
            </PageContainer>

        </div>
    );
}

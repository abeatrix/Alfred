import React from "react";
import { Spinner } from 'react-bootstrap';
import {isAuth, userInfoSearch} from '../../../config/auth'
import usePortfolio from '../../../hooks/usePortfolio'
import useFindUserInfo from '../../../hooks/userFindUserInfo'
import PortfolioStockList from './PortfolioStockList'
import { DashboardContainer, PortfolioContainer } from '../PortfolioElements';
import {ProfileInfo} from './ProfileInfo'

export const Portfolio = (props) => {
    const user = isAuth()
    const userId = user._id
    const [portfolio, setPortfolio] = usePortfolio(userId);
    const [userInfo, setUserInfo] = useFindUserInfo(userId);

    return (
        <div>
                    <DashboardContainer>
                    { (userInfo.data) ? <h3>Welcome! {userInfo.data.username}</h3> : <Spinner animation="grow" />}
                    { (userInfo.data) ?  <ProfileInfo userInfo={userInfo} /> : <Spinner animation="grow" />}
                    </DashboardContainer>

                    <PortfolioContainer>
                        {(portfolio) ? <PortfolioStockList data={portfolio} userId={userId} setPortfolio={setPortfolio} usePortfolio={usePortfolio} /> : <Spinner animation="grow" />}

                    </PortfolioContainer>
        </div>
    );

}


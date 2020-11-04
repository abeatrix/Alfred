import React from "react";
import { Spinner } from 'react-bootstrap';
import {isAuth, userInfoSearch} from '../../../config/auth'
import usePortfolio from '../../../hooks/usePortfolio'
import useFindUserInfo from '../../../hooks/userFindUserInfo'
import {PortfolioStockContainer} from './PortfolioStockContainer'
import { DashboardContainer, PortfolioContainer } from '../PortfolioElements';
import {ProfileInfo} from './ProfileInfo'
import { useRecoilState } from "recoil";
import { userState } from '../../../recoil/atoms'

export const Portfolio = (props) => {
    const userAuth = isAuth()
    const userId = userAuth._id

    const [userInfo, setUserInfo] = useFindUserInfo(userId);

    const [user, setUser] = useRecoilState(userState);

    return (
        <div>
                    <DashboardContainer>
                    { userInfo ?  <ProfileInfo userInfo={userInfo.data} /> : <Spinner animation="grow" />}
                    </DashboardContainer>

                    <PortfolioContainer>
                        {/* {(portfolio) && (userInfo.data) ? <PortfolioStockList data={portfolio} userId={userInfo.data._id}  setPortfolio={setPortfolio} usePortfolio={usePortfolio} /> : <Spinner animation="grow" />} */}
                        { user ? <PortfolioStockContainer userInfo={user} /> : null }
                    </PortfolioContainer>
        </div>
    );

}


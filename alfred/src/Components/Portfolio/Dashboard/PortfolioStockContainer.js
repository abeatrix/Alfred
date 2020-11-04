import React from "react";
import { Spinner } from 'react-bootstrap';
import usePortfolio from '../../../hooks/usePortfolio'
import useFindUserInfo from '../../../hooks/userFindUserInfo'
import PortfolioStockList from './PortfolioStockList'
import { DashboardContainer, PortfolioContainer } from '../PortfolioElements';
import {ProfileInfo} from './ProfileInfo'
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from '../../../recoil/atoms'
import { userIdState } from "../../../recoil/selectors";

export const PortfolioStockContainer = (props) => {

    // console.log(props)

    const recoilUserId = useRecoilValue(userIdState);

    const userId = props.userInfo.data._id

    const [portfolio, setPortfolio] = usePortfolio(userId);

    const [userInfo, setUserInfo] = useFindUserInfo(userId);

    return (
        <div>
            {(portfolio) && (userInfo.data) ? <PortfolioStockList data={recoilUserId} userId={userId}  setPortfolio={setPortfolio} usePortfolio={usePortfolio} /> : <Spinner animation="grow" />}
        </div>
    );

}


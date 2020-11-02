import React from "react";
import { Spinner } from 'react-bootstrap';
import Avatar from 'react-avatar';
import PortfolioStockList from '../Dashboard/PortfolioStockList'
import usePortfolio from '../../../hooks/usePortfolio'

export const ProfileInfo = (props) => {
    const [portfolio, setPortfolio] = usePortfolio(props.userInfo.data._id);

    return (
        <div>
            { props.userInfo ?  <Avatar size="100" src={props.userInfo.data.profilePic} /> : 'loading'}
            {/* {(portfolio) ? <PortfolioStockList data={portfolio}/> : <Spinner animation="grow" />} */}
        </div>
    );

}


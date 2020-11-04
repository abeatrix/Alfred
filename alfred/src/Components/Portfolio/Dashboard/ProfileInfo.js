import React from "react";
import { Clock } from 'grommet';
import { Spinner } from 'react-bootstrap';
import Avatar from 'react-avatar';
import PortfolioStockList from '../Dashboard/PortfolioStockList'
import usePortfolio from '../../../hooks/usePortfolio'

export const ProfileInfo = (props) => {
    // console.log(props.userInfo.username)

    return (
        <div>
         { props.userInfo ? <h3>Welcome back {props.userInfo.username}! <Clock type="digital" /> </h3> : <h3>Welcome back! <Clock type="digital" /></h3> }
        </div>
    );

}


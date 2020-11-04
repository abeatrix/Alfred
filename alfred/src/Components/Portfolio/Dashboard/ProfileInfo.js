import React from "react";
import { Clock } from 'grommet';
import { Spinner } from 'react-bootstrap';
import Avatar from 'react-avatar';
import PortfolioStockList from '../Dashboard/PortfolioStockList'
import usePortfolio from '../../../hooks/usePortfolio'

export const ProfileInfo = (props) => {

    return (
        <div  style={{display: 'inline'}}>
         { props.userInfo ? <div> <Clock style={{float:"right"}} type="digital" /> <h3>Welcome back {props.userInfo.username}! </h3> </div>: <h3>Welcome back! <Clock type="digital" /></h3> }
        </div>
    );

}


import React, { useEffect, useState } from "react";
import {
  Card,
  Table,
} from "react-bootstrap";
import usePolygon from '../../../../hooks/userPolygon';
import HotIndexItem from './HotIndexItem';
import Spinner from 'react-bootstrap/Spinner'
import MyPortfolio from '../../Dashboard/MyPortfolio'
// import axios from 'axios';
// import rateLimit from 'axios-rate-limit';

export  const HotStocks = (props) => {
  // console.log(props)
  const [polystock, setPolystock] = usePolygon('NFLX');
  const [polystock2, setPolystock2] = usePolygon('GOOG');
  const [polystock3, setPolystock3] = usePolygon('TSLA');
  const [polystock4, setPolystock4] = usePolygon('AMZN');
  const [polystock5, setPolystock5] = usePolygon('AAPL');

  useEffect(() => {
    const interval = setInterval(() => setPolystock('NFLX'), 30000);
    const interval2 = setInterval(() => setPolystock2('GOOG'), 30000);
    const interval3 = setInterval(() => setPolystock3('TSLA'), 30000);
    const interval4 = setInterval(() => setPolystock4('AMZN'), 30000);
    const interval5 = setInterval(() => setPolystock4('AAPL'), 30000);
    return () => {
      clearInterval(interval);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
      clearInterval(interval5);
    };
  }, []);

    return (

      <Card style={{ margin: "5%" }}>
        <Card.Body>
          <Table responsive>
            <Card.Title>Alfred's Picks</Card.Title>
            {polystock.isUSMarketOpen ?
              <small > Market is Currently <span className={"text-success"} >Open</span> </small>
              : <small > Market is Currently <span className={"text-danger"} >Closed</span> </small> }
            <Table responsive>
              <thead>
                <tr>
                  <th>Ticker</th>
                  <th>Last Traded</th>
                  <th>Changes</th>
                </tr>
              </thead>
              {(polystock ) ?
              <tbody>
                {/* <tr><MyPortfolio /></tr> */}
                <tr><HotIndexItem polystock={polystock5} /></tr>
                <tr><HotIndexItem polystock={polystock} /></tr>
                <tr><HotIndexItem polystock={polystock2} /></tr>
                <tr><HotIndexItem polystock={polystock3} /></tr>
                <tr><HotIndexItem polystock={polystock4} /></tr>
              </tbody>
              : <Spinner animation="border" variant="success" /> }
            </Table>
          </Table>
        </Card.Body>
      </Card>
    )
}


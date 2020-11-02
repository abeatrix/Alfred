import React, { useEffect, useState } from "react";
import {
  Card,
  Table,
} from "react-bootstrap";
import usePolygon from '../../../../hooks/userPolygon';
import HotIndexItem from './HotIndexItem';
import Spinner from 'react-bootstrap/Spinner'
// import axios from 'axios';
// import rateLimit from 'axios-rate-limit';

export  const HotStocks = () => {

  const [polystock, setPolystock] = usePolygon('NFLX');
  const [polystock2, setPolystock2] = usePolygon('GOOG');
  const [polystock3, setPolystock3] = usePolygon('TSLA');
  const [polystock4, setPolystock4] = usePolygon('AMZN');

  // const marketTime = true

  // const [marketStatus, setmarketStatus] = useState(marketTime);

//   useEffect(() => {
//     http.get(`https://financialmodelingprep.com/api/v3/market-hours?apikey=6a81c4fba84851a61900dc1666ff4890`)
//       .then(res => {
//         console.log(res.data[0].isTheStockMarketOpen)

//         this.marketTime= res.data[0].isTheStockMarketOpen
//       });
// }, [])

    return (

      <Card style={{ margin: "5%" }}>
        <Card.Body>
          <Table responsive>
            <Card.Title>Today's Market </Card.Title>
            <Table responsive>
              <thead>
                <tr>
                  <th>Ticker</th>
                  <th>Lastest Price</th>
                  <th>Changes</th>
                </tr>
              </thead>
              {(polystock ) ?
              <tbody>
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


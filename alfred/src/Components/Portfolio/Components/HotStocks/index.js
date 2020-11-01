import React, { useEffect, useState } from "react";
import {
  Card,
  Table,
} from "react-bootstrap";
import axios from 'axios';
import usePolygon from '../../../../hooks/userPolygon';
import HotIndexItem from './HotIndexItem';
import Spinner from 'react-bootstrap/Spinner'
import rateLimit from 'axios-rate-limit';

export  const HotStocks = () => {

  const [polystock, setPolystock] = usePolygon('NFLX');
  const [polystock2, setPolystock2] = usePolygon('GOOG');
  const [polystock3, setPolystock3] = usePolygon('TSLA');
  const [polystock4, setPolystock4] = usePolygon('AMZN');

  const marketTime = [
    {
      open: false
    }
  ]

  const [marketStatus, setmarketStatus] = useState(marketTime);

  const http = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 1000, maxRPS: 2 })
  http.getMaxRPS() // 2

  useEffect(() => {
    http.get(`https://api.polygon.io/v1/marketstatus/now?apiKey=gqf23sEvmyZ8hzWDeBRy5TedKBU03kF5`, {headers: {"Access-Control-Allow-Origin": "*"}})
      .then(res => {
        console.log(JSON.parse(res.data.market))
        // setportstockData({
        //   ...setmarketStatus,
        //   open: true
        // })
      });
}, [])

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


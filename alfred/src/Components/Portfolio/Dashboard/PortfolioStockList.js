import React from 'react'
import PortfolioStockListRow from './PortfolioStockListRow'


import {
  Card,
  Table,
} from "react-bootstrap";

const PortfolioStockList = (props) => {
  function generatePortfolioItem(portStocks) {
    return portStocks.map(stock => {
        return (
                <PortfolioStockListRow data={stock} />
        )
    })
  }

  return (

        <Card.Body style={{ margin: "5%" }}>
          <Table responsive>
            <Card.Title> Your Portfolio </Card.Title>
            <Table responsive>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Value</th>
                  <th>Cost</th>
                  <th>Return</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                {generatePortfolioItem(props.data)}
              </tr>
              </tbody>
            </Table>
          </Table>
        </Card.Body>

  );
}

export default PortfolioStockList;

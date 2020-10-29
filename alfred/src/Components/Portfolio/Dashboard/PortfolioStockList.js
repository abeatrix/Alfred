import React from 'react'
import PortfolioStockListRow from './PortfolioStockListRow'

import {
  Card,
  Table,
} from "react-bootstrap";

const PortfolioStockList = (props) => {
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
                {/* {Object.keys(props.stocks).map((stock_name, index) =>
                  {
                    let current_stock = props.stocks[stock_name];
                    return (
                      <PortfolioStockListRow
                        key={index} stock_name={stock_name}
                        data={current_stock}
                      />
                    )
                  }
                )} */}
              </tbody>
            </Table>
          </Table>
        </Card.Body>

  );
}

export default PortfolioStockList;

import React from 'react'
import {PortfolioStockListRow} from './PortfolioStockListRow'
import PortfolioModel from '../../../Model/PortfolioModel'
import {Card,Table} from "react-bootstrap";


const PortfolioStockList = (props) => {
  // console.log(props)
  function generatePortStock(stocks) {
    // console.log(stocks)
    return stocks.map((data) =>{
      return(
        <PortfolioStockListRow data={data} />
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
                  <th>Quantity</th>
                  <th>Cost</th>
                  <th>Value</th>
                  <th>Return</th>
                </tr>
              </thead>
              <tbody>
              {props.data.portfolio ? generatePortStock(props.data.portfolio) : 'Loading'}
              </tbody>
            </Table>
          </Table>
        </Card.Body>

  );
}

export default PortfolioStockList;



import React, {useState} from 'react'
import PortfolioStockListRow from './PortfolioStockListRow'
import useShowPortDetail from '../../../hooks/useShowPortDetail'
import PortfolioModel from '../../../Model/PortfolioModel'
import {
  Card,
  Table,
} from "react-bootstrap";


const PortfolioStockList = (props) => {

    // console.log(props.data)
    // console.log(props.data.length)

      function props.map(portId => {
      PortfolioModel.detail(portId).then((data) => {
        console.log(data)
      });
    })


  function generatePortfolioItem(data) {

    return

  }

    // return portStocks.map(stock => {
    //     return (
    //             <PortfolioStockListRow data={stock} />
    //     )
    // })


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

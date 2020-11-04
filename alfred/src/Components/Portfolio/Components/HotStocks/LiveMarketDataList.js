import React from 'react'
import {LiveMarketDataListRow} from './LiveMarketDataListRow'
import {Card,Table} from "react-bootstrap";


const LiveMarketDataList = (props) => {
  // console.log(props)
  function generateLiveData(data) {
        return(
            <h1>data</h1>
            // <LiveMarketDataListRow data={data} />
        )

    // return stocks.map((data) =>{
    //   return(
    //     <LiveMarketDataListRow data={data} />
    //   )
    // })
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
                  <th>Market</th>
                  <th>Cost</th>
                  <th>Value</th>
                  <th>Return</th>
                </tr>
              </thead>
              <tbody>
              {this.state.wsData ? generateLiveData(this.state.wsData) : 'Loading'}
              </tbody>
            </Table>
          </Table>
        </Card.Body>

  );
}

export default LiveMarketDataList;



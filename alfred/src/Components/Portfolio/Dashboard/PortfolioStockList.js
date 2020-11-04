import React, {useState, useEffect} from 'react'
import {PortfolioStockListRow} from './PortfolioStockListRow'
import {Card,Table} from "react-bootstrap";
import axios from 'axios';
import { useRecoilState } from "recoil";
import { userPortState, userState, userPortListState } from '../../../recoil/atoms'

const PortfolioStockList = (props) => {
  // console.log(props)

  const [deleteStock, setDeleteStock] = useState(false)
  const [userPortList, setuserPortList] = useRecoilState(userPortListState);

  const handleDelete = (portId) => {
    axios.delete(`http://localhost:4000/api/portfolio/${portId}`)
    .then((res)=>{
      const updatedList = props.data.portfolio.filter((id) => {
      return id !== res.data.portfolio._id;
      });
      props.setPortfolio(props.userId)
      setDeleteStock( !deleteStock)
      setuserPortList(updatedList)
    })
  }

  function generatePortStock(stocks) {
    return stocks.map((data) =>{
      return(
        <PortfolioStockListRow key={data} data={data} userId={props.userId} handleDelete={handleDelete}/>
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
                  <th>Market</th>
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



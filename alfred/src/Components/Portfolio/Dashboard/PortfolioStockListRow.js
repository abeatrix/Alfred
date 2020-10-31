import React, { useEffect, useState } from "react";
import axios from 'axios';
import useShowPortDetail from '../../../hooks/useShowPortDetail'
import Spinner from 'react-bootstrap/Spinner'
import rateLimit from 'axios-rate-limit';

export const PortfolioStockListRow = (props) => {

  const [portfoliodetail, setPortfolioDetail] = useShowPortDetail(props.data);

  const stockData = [
    {
      marketprice: 0,
      cost: 0,
      totalvalue: 0,
      loaded: false,
      gains: 0
    }
  ]

  const [portstockData, setportstockData] = useState(stockData);

  const http = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 1000, maxRPS: 2 })
  http.getMaxRPS() // 2


  useEffect(() => {
    http.get(`https://finnhub.io/api/v1/quote?symbol=${portfoliodetail.data.symbol}&token=bude72f48v6ped90lmfg`)
      .then(res => {
        console.log(JSON.parse(res.data.c))
        setportstockData({
          ...portstockData,
          marketprice: JSON.parse(res.data.c),
          totalvalue: portstockData.marketprice*portfoliodetail.data.quantity,
          cost: portfoliodetail.data.quantity*portfoliodetail.data.avgcost,
          gains: portstockData.totalvalue-portstockData.cost,
          loaded: true
        })
      });
}, [portstockData])



  return (
    <>
       {(portfoliodetail.data && portstockData.loaded == true ) ?
        <tr>
          {(portfoliodetail.data.symbol) ? <td>{portfoliodetail.data.symbol}</td> : <td> <Spinner animation="border" variant="success" /></td>}
          {(portfoliodetail.data.quantity) ? <td>{portfoliodetail.data.quantity}</td> : <td> <Spinner animation="border" variant="success" /></td>}
          {(portstockData.cost) ? <td>{portstockData.cost}</td> : <td> <Spinner animation="border" variant="success" /></td>}
          {(portstockData.totalvalue) ? <td>{portstockData.totalvalue}</td> : <td> <Spinner animation="border" variant="success" /></td>}
          {(portstockData.gains) ? <td>{portstockData.gains}  </td> : <td> <Spinner animation="border" variant="success" /></td>}
          {/* <td>{portstockData.marketprice}</td> */}
        </tr>
        : <Spinner animation="border" variant="success" /> }

    </>
  );

}

// import React, { useEffect } from 'react'
// import axios from 'axios';
// import useShowPortDetail from '../../../hooks/useShowPortDetail'
// import Spinner from 'react-bootstrap/Spinner'
// import rateLimit from 'axios-rate-limit';

// export const PortfolioStockListRow = (props) => {


//   const [portstockData, setportstockData] = useState({
//     marketprice: 0,
//     cost: 0,
//     totalvalue: 0,
//     loaded: false
// });


//   let marketprice = 0
//   let cost = 0
//   let totalvalue = 0
//   let loaded = false
//   const [portfoliodetail, setPortfolioDetail] = useShowPortDetail(props.data);
//   const http = rateLimit(axios.create(), { maxRequests: 2, perMilliseconds: 1000, maxRPS: 2 })
//   http.getMaxRPS() // 2

//     useEffect(() => {
//       http.get(`https://finnhub.io/api/v1/quote?symbol=${portfoliodetail.data.symbol}&token=bude72f48v6ped90lmfg`)
//         .then(res => {
//           marketprice = JSON.parse(res.data.c)
//           totalvalue = marketprice*portfoliodetail.data.quantity
//           cost = portfoliodetail.data.quantity*portfoliodetail.data.avgcost
//           console.log(marketprice, totalvalue, portfoliodetail.data.symbol, portfoliodetail.data.avgcost)
//           loaded = true
//         });
// }, [])


//   return (
//     <>
//        {(portfoliodetail.data && loaded = true) ?
//         <tr>
//           {(portfoliodetail.data.symbol) ? <td>{portfoliodetail.data.symbol}</td> : <td> <Spinner animation="border" variant="success" /></td>}
//           {(portfoliodetail.data.quantity) ? <td>{portfoliodetail.data.quantity}</td> : <td> <Spinner animation="border" variant="success" /></td>}
//           {(cost) ? <td>{cost}</td> : <td> <Spinner animation="border" variant="success" /></td>}
//           <td>{totalvalue}</td>
//           <td>{marketprice}</td>
//           {/* {(totalvalue) ? <td>{totalvalue}</td> : <td> <Spinner animation="border" variant="success" /></td>} */}
//           {/* {(gains) ? <td>{gains.c} {gains} </td> : <td> <Spinner animation="border" variant="success" /></td>} */}
//         </tr>
//         : <Spinner animation="border" variant="success" /> }

//     </>
//   );

// }
//   useEffect(() => {
//     http.get(`https://finnhub.io/api/v1/quote?symbol=${portfoliodetail.data.symbol}&token=bude72f48v6ped90lmfg`)
//       .then(res => {
//         setportstockData({
//           ...portstockData,
//           marketprice: JSON.parse(res.data.c),
//           totalvalue: marketprice*portfoliodetail.data.quantity,
//           cost: portfoliodetail.data.quantity*portfoliodetail.data.avgcost,
//           loaded: true
//         })
//       });
// }, [])

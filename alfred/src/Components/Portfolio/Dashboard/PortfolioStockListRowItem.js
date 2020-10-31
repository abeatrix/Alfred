import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'
import rateLimit from 'axios-rate-limit';

export const PortfolioStockListRowItem = (props) => {

    const FH = process.env.REACT_APP_FINNHUB_URL

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

    const http = rateLimit(axios.create(), { maxRequests: 10, perMilliseconds: 500000, maxRPS: 5 })

    http.getMaxRPS()

    useEffect(() => {
        // http.get(`${FH}quote?symbol=${props.portfoliodetail.symbol}&token=${process.env.REACT_APP_FINNHUB_API_KEY}`)
        http.get('https://cloud.iexapis.com/stable/stock/aapl/book?token=pk_b6f095f4e3bd490fb605c071ec8ba242')
        .then(res => {
            // console.log(res.data.quote.latestPrice)
            setportstockData({
            ...portstockData,
            marketprice: parseInt(res.data.quote.latestPrice),
            //   marketprice: JSON.parse(res.data.c),
            totalvalue: parseInt(portstockData.marketprice)*parseInt(props.data.quantity),
            cost: parseInt(props.data.quantity)*parseInt(props.data.avgcost),
            gains: parseInt(portstockData.totalvalue)-parseInt(portstockData.cost),
            loaded: true
            })
        });
    }, [portstockData])


    return (
        <>
        { props.data && portstockData.loaded ?
            <>
            <td>{portstockData.marketprice}</td>
            {(portstockData.cost) ? <td>{portstockData.cost}</td> : <td> <Spinner animation="border" variant="success" /></td>}
            {(portstockData.totalvalue) ? <td>{portstockData.totalvalue}</td> : <td> <Spinner animation="border" variant="success" /></td>}
            {(portstockData.gains) ? <td>{portstockData.gains}  </td> : <td> <Spinner animation="border" variant="success" /></td>}
            </>
            : <Spinner animation="border" variant="success" /> }

        </>
    );

}

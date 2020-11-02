import React, { useEffect, useState } from "react";
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import rateLimit from 'axios-rate-limit';
import { RiDeleteBin6Line } from "react-icons/ri";

export const PortfolioStockListRowItem = (props) => {
    const portId = props.data._id
    const stockData = [
        {
        marketprice: 0,
        cost: 0,
        totalvalue: 0,
        loaded: false,
        gains: 0,
        portId: props.data._id
        }
    ]

    const [portstockData, setportstockData] = useState(stockData);

    const http = rateLimit(axios.create(), { maxRequests: 10, perMilliseconds: 500000, maxRPS: 5 })

    http.getMaxRPS()

    const deleteFromPort((event) => {
        event.preventDefault();
    })

    useEffect(() => {
        http.get(`https://cloud.iexapis.com/stable/stock/${props.data.symbol}/book?token=${process.env.REACT_APP_IEX_API_KEY}`)
        .then(res => {
            setportstockData({
                ...portstockData,
                marketprice: parseInt(res.data.quote.latestPrice),
                totalvalue: parseInt(portstockData.marketprice)*parseInt(props.data.quantity),
                cost: parseInt(props.data.quantity)*parseInt(props.data.avgcost),
                gains: portstockData.totalvalue-portstockData.cost,
                loaded: true,
            })
        });
    }, [])


    return (
        <>
        { props.data && portstockData.loaded && portstockData.cost >0 ?
            <>
                <td>{portstockData.marketprice}</td>
                {(portstockData.cost) ? <td>{portstockData.cost}</td> : <td> <Spinner animation="border" variant="success" /></td>}
                {(portstockData.totalvalue) ? <td>{portstockData.totalvalue}</td> : <td> <Spinner animation="border" variant="success" /></td>}
                {(portstockData.gains) ? <td> {portstockData.gains}  </td> : <td> <Spinner animation="border" variant="success" /></td>}
                <td><button onCliCK={deleteFromPort}><RiDeleteBin6Line/> </button></td>
            </>
            : <Spinner animation="border" variant="success" /> }

        </>
    );

}

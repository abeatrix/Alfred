import React, { useEffect, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import {Modal, Button, Form} from 'react-bootstrap';
import rateLimit from 'axios-rate-limit';
import { TiDeleteOutline, TiEdit } from "react-icons/ti";

function MyVerticallyCenteredModal(props) {
    const [formData, setFormData] = useState({
        symbol: props.symbol,
        quantity: 'Number of Shares',
        avgcost: 'Cost per Share',
        userId: props.userId,
        submitted: false,
    });

    const { symbol, quantity, avgcost, userId} = formData

    const handleInput = text => e => {
        setFormData({...formData, [text]: e.target.value, symbol: props.symbol, userId: props.userId, submitted: false,})
    }

    const handleSubmit = (e) => {
        console.log('submit')
        e.preventDefault();
        axios.put(`${process.env.REACT_APP_BACKEND_PORTFOLIO_API_URL}/${props.portId}`, {
            symbol,
            quantity,
            avgcost,
            userId
        }).then(res => {
            props.setportstockData({
                loaded: true,
                marketprice: parseInt(props.marketprice),
                totalvalue: parseInt(props.marketprice)*parseInt(quantity),
                cost: parseInt(quantity)*parseInt(avgcost),
                gains: (parseInt(props.marketprice)*parseInt(quantity))-(parseInt(quantity)*parseInt(avgcost)),
                changed: true
            })
            props.setPortfolioDetail(props.portId)
        }).catch(err => {
            {(err.response) ? toast.error(err.response.data.errors) : toast.error('Try Again')}
            console.log(err)
        });

    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Editing info for {props.symbol}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formAvgCost">
                        <Form.Label>Average Cost</Form.Label>
                        <Form.Control type="number" name='avgcost' placeholder='Cost of Share' onChange={handleInput('avgcost')} required/>
                    </Form.Group>
                    <Form.Group controlId="formQuan">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control type="number" name='quantity' placeholder='Number of Shares' onChange={handleInput('quantity')} required/>
                    </Form.Group>
                    <Button onClick={props.onHide} variant="danger">Cancel</Button>
                    <Button type='submit' variant="success" onClick={props.onHide}>Submit</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}


export const PortfolioStockListRowItem = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    const portId = props.data._id
    const userId = props.userId
    const stockData = [
        {
        marketprice: 0,
        cost: 0,
        totalvalue: 0,
        loaded: false,
        gains: 0,
        portId: props.data._id,
        changed: false
        }
    ]

    const [portstockData, setportstockData] = useState(stockData);

    const http = rateLimit(axios.create(), { maxRequests: 10, perMilliseconds: 500000, maxRPS: 5 })

    http.getMaxRPS()

    useEffect(() => {
        http.get(`https://cloud.iexapis.com/stable/stock/${props.data.symbol}/book?token=${process.env.REACT_APP_IEX_API_KEY}`)
        .then(res => {
            setportstockData({
                ...portstockData,
                marketprice: parseInt(res.data.quote.latestPrice),
                totalvalue: parseInt(res.data.quote.latestPrice)*parseInt(props.data.quantity),
                cost: parseInt(props.data.quantity)*parseInt(props.data.avgcost),
                gains: (parseInt(res.data.quote.latestPrice)*parseInt(props.data.quantity))-(parseInt(props.data.quantity)*parseInt(props.data.avgcost)),
                loaded: true,
                changed: false
            })
        });
    }, [])

    const handleSubmit = (e) => {
        console.log('DELETE THIS')
        e.preventDefault();
        props.handleDelete(portId)
    }



    return (
        <>
        { props.data && portstockData.loaded && portstockData.cost >0 ?
            <>
                <td>{portstockData.marketprice}</td>
                {(portstockData.cost) ? <td>${portstockData.cost}</td> : <td> <Spinner animation="border" variant="success" /></td>}
                {(portstockData.totalvalue) ? <td>${portstockData.totalvalue}</td> : <td> <Spinner animation="border" variant="success" /></td>}
                {(portstockData.gains) ? <td className={(portstockData.gains > 0) ? "text-success" : "text-danger"} > ${portstockData.gains}  </td> : <td> <Spinner animation="border" variant="success" /></td>}
                <td><TiEdit onClick={() => setModalShow(true)}/></td>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    portId={portId}
                    userId={userId}
                    symbol={props.data.symbol}
                    marketprice={portstockData.marketprice}
                    setportstockData={setportstockData}
                    setPortfolioDetail={props.setPortfolioDetail}
                    onHide={() => setModalShow(false)}
                />
                <td><TiDeleteOutline onClick={handleSubmit} /></td>
            </>
            : <Spinner animation="border" variant="success" /> }

        </>
    );

}

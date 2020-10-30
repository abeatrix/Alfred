import React, {useState} from 'react'
import { ProgressBar, Dropdown, Card, Form, Button, Table } from 'react-bootstrap';
import AddStockContainer from '../../Portfolio/Components/AddStock/AddStockContainer';
import {AddaStockBtn, AddaStockBtnsWrapper } from '../../Portfolio/PortfolioElements'
import {isAuth} from '../../../config/auth'
import PolygonModel from '../../../Model/PolygonModel'

const Results = (props) => {
    const user = isAuth()

    const [formData, setFormData] = useState({
        symbol: '',
        quantity: '',
        avgcost: '',
        userId: user._id,
        submitted: false,
    });

    const { symbol, quantity, avgcost, userId, submitted} = formData

    const handleInput = text => e => {
        setFormData({...formData, [text]: e.target.value, userId: user._id, submitted: false,})
    }

    // handleInput = (e) => {
    //     setFormData({
    //     symbol: e.target.value,
    //     quantity: e.target.value,
    //     avgcost: e.target.value,
    //     userId: '',
    //     submitted: false,
    //     })
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        PolygonModel.search(this.state.query).then(res => {
            setFormData({
                ...formData,
                symbol: '',
                quantity: '',
                avgcost: '',
                userId: '',
                submitted: true,
            })
        })
    }

    function displayResults(data){
        const user = isAuth()
        return (
            <>
                <Card style={{ margin: '5%' }}>
                    <Card.Body>
                        <Card.Title>Add a Stock</Card.Title>
                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>{data.companyName}</Form.Label>
                                <Form.Control type="text" name='symbol' placeholder="Ticker" value={data.symbol} onChange={handleInput('symbol')}/>
                            </Form.Group>
                            <Form.Group controlId="formAvgCost">
                                <Form.Label>Average Cost</Form.Label>
                                <Form.Control type="number" name='avgcost' placeholder="Cost per Share" onChange={handleInput('avgcost')} required/>
                            </Form.Group>
                            <Form.Group controlId="formQuan">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="number" name='quantity' placeholder="Number of Shares" onChange={handleInput('quantity')}/>
                            </Form.Group>
                            <input type="hidden" name="userId" value={user._id}></input>
                            <AddaStockBtnsWrapper>
                                <AddaStockBtn><Button variant="danger">Sell</Button></AddaStockBtn>
                                <AddaStockBtn><Button variant="success" type='submit'>Buy</Button></AddaStockBtn>
                            </AddaStockBtnsWrapper>
                        </Form>
                    </Card.Body>
                </Card>
            </>
        )
    }
    return(
        <>
            {displayResults(props.data)}
        </>
    )
}


export default Results;

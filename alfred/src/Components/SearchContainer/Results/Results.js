import React, {useState} from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import {AddaStockBtn, AddaStockBtnsWrapper } from '../../Portfolio/PortfolioElements'
import {isAuth, getCookie} from '../../../config/auth'
import axios from 'axios';

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



    function displayResults(data){
        const user = isAuth()
        // const token = getCookie()

        const handleInput = text => e => {
            setFormData({...formData, [text]: e.target.value, symbol: data.symbol, userId: user._id, submitted: false,})
        }

        const search = async data=>{
            setFormData({submitted: false});
            const res = await axios(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${process.env.REACT_APP_FINNHUB_API_KEY}`);
            const symbol = await res.displaySymbol;
            setFormData({ symbol, loading: false });
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            axios.post(`${process.env.REACT_APP_BACKEND_PORTFOLIO_API_URL}`, {
                symbol,
                quantity,
                avgcost,
                userId
            }).then(res => {
                setFormData({
                    ...formData,
                    symbol: '',
                    quantity: '',
                    avgcost: '',
                    userId: '',
                    submitted: true,
                })
            }).catch(err => {
                {(err.response) ? toast.error(err.response.data.errors) : toast.error('No Idea')}
            });

        }

        return (
            <>
                <Card style={{ margin: '5%' }}>
                    <Card.Body>
                        <Card.Title>Add a Stock</Card.Title>
                        <Form onSubmit={handleSubmit}>
                        <fieldset disabled>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>{data.companyName}</Form.Label>
                                <Form.Control type="text" name='symbol' placeholder="Ticker" defaultValue={data.symbol} />
                                <input type="hidden" name="symbol" value={data.symbol}></input>
                            </Form.Group>
                            </fieldset>
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

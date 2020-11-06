import React, {useState} from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import {AddaStockBtn, AddaStockBtnsWrapper } from '../../Portfolio/PortfolioElements'
import {isAuth} from '../../../config/auth'
import axios from 'axios';
import usePortfolio from '../../../hooks/usePortfolio'
import useFindUserInfo from '../../../hooks/userFindUserInfo'
import { useRecoilState } from "recoil";
import { userPortState, userState, userPortStatusState } from '../../../recoil/atoms'

const Results = (props) => {
    // const user = isAuth()

    const [user, setUser] = useRecoilState(userState);

    const [userInfo, setUserInfo] = useFindUserInfo();

    const [userPort, setuserPort] = useRecoilState(userPortState);

    const [portfolio, setPortfolio] = usePortfolio();

    const [modalShow, setModalShow] = useState(true);

    const [userPortStatus, setuserPortStatus] = useRecoilState(userPortStatusState);

    const [formData, setFormData] = useState({
        symbol: null,
        quantity: 'Number of Shares',
        avgcost: 'Cost per Share',
        userId: user.data._id,
    });

    const { symbol, quantity, avgcost, userId} = formData

    const handleInput = text => e => {
        setFormData({...formData, [text]: e.target.value, symbol: props.data.symbol, userId: user.data._id, submitted: false,})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_PORTFOLIO_API_URL}`, {
            symbol,
            quantity,
            avgcost,
            userId
        }).then(res => {
            setUserInfo(userId)
            setPortfolio(userId)
            setFormData({
                ...formData,
                quantity: 'Number of Shares',
                avgcost: 'Cost per Share',
                submitted: true,
            })
            toast.success('Entered Successfully')
            setModalShow(false)
            setuserPort({
                symbol,
                quantity,
                avgcost,
                userId
            });
        }).catch(err => {
            {(err.response) ? toast.error(err.response.data.errors) : toast.error('Please try again')}
        });

    }

    return (
        <>
            { modalShow ?
            <Card style={{ margin: '5%' }}>
            <ToastContainer />
                <Card.Body>
                    <Card.Title>Add a Stock</Card.Title>
                    <Form onSubmit={handleSubmit}>
                    <fieldset disabled>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>{props.data.companyName}</Form.Label>
                            <Form.Control type="text" name='symbol' placeholder="Ticker" defaultValue={props.data.symbol} />
                            <input type="hidden" name="symbol" value={props.data.symbol} >< /input>
                        </Form.Group>
                    </fieldset>
                        <Form.Group controlId="formAvgCost">
                            <Form.Label>Average Cost</Form.Label>
                            <Form.Control type="number" name='avgcost' placeholder={avgcost} onChange={handleInput('avgcost')} required/>
                        </Form.Group>
                        <Form.Group controlId="formQuan">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" name='quantity' placeholder={quantity} onChange={handleInput('quantity')}/>
                        </Form.Group>
                        <input type="hidden" name="userId" value={user.data._id}></input>
                        <AddaStockBtnsWrapper>
                            {/* <AddaStockBtn><Button variant="danger">Sell</Button></AddaStockBtn> */}
                            <AddaStockBtn><Button variant="success" type='submit' >Buy</Button></AddaStockBtn>
                        </AddaStockBtnsWrapper>
                    </Form>
                </Card.Body>
            </Card>
            : null }
        </>
    )



}


export default Results;

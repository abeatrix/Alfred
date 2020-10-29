import React from "react";
import { Card } from 'react-bootstrap';
import { AddaStockBtn, AddaStockBtnsWrapper } from '../PortfolioElements';


class AddaStock extends React.Component
  return (){
      <Card style={{ margin: '5%' }}>
      <Card.Body>
          <Card.Title>Add a Stock</Card.Title>
          <Form>
            <Form.Group onSubmit={this.props.handleSubmit} controlId="formGroupEmail">
              <Form.Label>Symbol</Form.Label>
              <Form.Control value={this.props.query}type="text" name='symbol' placeholder="Ticker" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Average Cost</Form.Label>
              <Form.Control type="number" name='avgcost' placeholder="Cost per Share" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" name='quantity' placeholder="Number of Shares" />
            </Form.Group>
            <AddaStockBtnsWrapper>
              <AddaStockBtn><Button variant="danger">Sell</Button></AddaStockBtn>
              <AddaStockBtn><Button variant="success" type='submit'>Buy</Button></AddaStockBtn>
            </AddaStockBtnsWrapper>
          </Form>
      </Card.Body>
    </Card>
  };

  export default AddaStock;


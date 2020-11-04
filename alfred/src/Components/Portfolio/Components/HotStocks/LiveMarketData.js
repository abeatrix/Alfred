import React from "react";
import axios from 'axios';
import HotIndexItem from './HotIndexItem'
import {Card,Table, List} from "react-bootstrap";
import { Spinner } from 'react-bootstrap';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const wsFinnHub = `wss://ws.finnhub.io?token=${process.env.REACT_APP_FINNHUB_API_KEY}`
const socket = new WebSocket(wsFinnHub);

class LiveMarketData extends React.Component {

    state = {
        wsData: null,
        wsDataGraph: [0, 1, 2],
        wsDataGraphReady: false
    }

    componentDidMount = () => {
    // Connection opened -> Subscribe
        const ticker = this.props.data
        socket.addEventListener('open', function (event) {
        socket.send(JSON.stringify(
            {'type':'subscribe', 'symbol': ticker}
        ))
        console.log('Connected to socket')
        });

        const result = this
    // Listen for messages
        socket.onmessage = e =>{
            const message = JSON.parse(e.data)
            if(message.data != undefined){
            result.setState({
                wsData: message.data[0].p,
                // wsDataGraph: [...this.state.wsDataGraph, message.data[0].p],
                wsDataGraphReady: true
            })
            } else {
                result.setState({
                    wsData: 'loading...',
                })
            }
        }

    // try to reconnect if it got disconnected
        socket.addEventListener('close', function (event) {
            console.log('Message from server ', "closing");
        });
    }


    render() {
        // console.log(this.state.wsDataGraph)
        return (
            <Card style={{ margin: "5%" }}>
                <Card.Body>
                <Table responsive>
                    <Card.Title>Popular Stocks Live Data</Card.Title>
                    <Table responsive>
                    <thead>
                        <tr>
                        <th>Ticker</th>
                        <th>Price</th>
                        <th>Graph</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.wsData!= null ?

                        <tr>
                            <td>{this.props.data}</td>
                            <td>{this.state.wsData}</td>
                            <td>
                                { this.state.wsDataGraphReady ?
                                <Sparklines data={(this.state.wsDataGraph).map((price) => { return parseInt(price) })}>
                                    <SparklinesLine color="green" />
                                </Sparklines>
                                : <h3>Loading</h3> }
                            </td>
                        </tr>

                    :
                        <tr>
                            <td>{this.props.data}</td>
                            <td><Spinner animation="border" variant="success" /></td>
                        </tr>

                    }
                    </tbody>
                    </Table>
                </Table>
                </Card.Body>
            </Card>

        );
    }

}
export default LiveMarketData;


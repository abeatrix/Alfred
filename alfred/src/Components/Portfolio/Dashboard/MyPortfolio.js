import React from "react";
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'

const wsFinnHub = `wss://ws.finnhub.io?token=${process.env.REACT_APP_FINNHUB_API_KEY}`

const socket = new WebSocket(wsFinnHub);

class MyPortfolio extends React.Component {
    state = {
        wsData: null,
        wsDataV: null
    }

    componentDidMount = () => {
    // Connection opened -> Subscribe
        socket.addEventListener('open', function (event) {
        socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
        // socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'MSFT'}))
        console.log('Connected to socket')
        });

        const result = this
    // Listen for messages
        socket.onmessage = e =>{
            console.log(e)
            const message = JSON.parse(e.data)
            if(message.data != undefined){
                console.log(message)
            result.setState({
                wsData: message.data[0].p,
                wsDataV: message.data[0].v
            })
            } else {
                result.setState({
                    wsData: 'loading'
                })
            }
        }

    // try to reconnect if it got disconnected
        socket.addEventListener('close', function (event) {
            console.log('Message from server ', "closing");
        });
    }

    render() {
        return (
            <>
                <td>
                    <p className="mb-1 text-dark font-weight-medium">AAPL</p>
                    {/* <small className="font-weight-medium">Apple, Inc.</small> */}
                  </td>
                  {this.state.wsData!= null ? <td className="text-success font-weight-medium" >${this.state.wsData}</td> : <td className="font-weight-medium" ><Spinner animation="border" variant="success" /></td> }
                  {/* <td className={ s >0 ? "text-success" : "text-danger"}> ${s} </td> */}
                  {this.state.wsDataV!= null ? <td className="text-success font-weight-medium" > {this.state.wsDataV}</td> : <td className="font-weight-medium" ><Spinner animation="border" variant="success" /></td> }
            </>
        );
    }
}
export default MyPortfolio;


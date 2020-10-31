import React from "react";
import axios from 'axios';

const wsFinnHub = `wss://ws.finnhub.io?token=${process.env.REACT_APP_FINNHUB_API_KEY}`
// const wsFinnHub = `wss://socket.polygon.io/stocks`

const socket = new WebSocket(wsFinnHub);
console.log(socket)

class MyPortfolio extends React.Component {


    componentDidMount = () => {
    // Connection opened -> Subscribe
        socket.addEventListener('open', function (event) {
        socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
    });

    // Listen for messages
        socket.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
    });
    }


    // console.log(portfolio)

    render() {
        return (
        <div>

            <h1>testing</h1>
        </div>
        );
    }

}
export default MyPortfolio;


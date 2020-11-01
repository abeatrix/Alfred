import React from "react";
import axios from 'axios';

const wsFinnHub = `wss://ws.finnhub.io?token=${process.env.REACT_APP_FINNHUB_API_KEY}`
// const polygon = `wss://socket.polygon.io/stocks`

const socket = new WebSocket(wsFinnHub);

const now = new Date().toISOString()

class MyPortfolio extends React.Component {
    state = {
        wsData: null
    }
    // componentDidMount = () => {
    // // Connection opened -> Subscribe
    //     socket.addEventListener('open', function (event) {
    //     socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
    //     console.log('Connected to socket')
    // });

    // // Listen for messages
    // socket.addEventListener('message', function (event) {
    //     if(event.data[4] === "p"){
    //         console.log(event.data)
    //         //
    //     }
    //     console.log('Message from server ', event);
    //     this.setState({wsData: JSON.parse(event)})
    // });

    // // try to reconnect if it got disconnected
    // socket.addEventListener('message', function (event) {
    //     // console.log('Message from server ', event.data.type);
    //     console.log('Message from server ', "disconnected");
    // });
    // }

    marketHour = () =>{
        const res = axios(`https://financialmodelingprep.com/api/v3/market-hours?apikey=6a81c4fba84851a61900dc1666ff4890`)
            .then(result =>
                { return console.log(result.data[0].isTheStockMarketOpen)
                })
            .catch(error => { console.error(error); return Promise.reject(error); });
        }



    render() {

        return (
        <div>
            <h1>testing</h1>
        </div>
        );
    }

}
export default MyPortfolio;


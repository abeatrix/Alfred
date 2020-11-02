import React from "react";
import axios from 'axios';

const wsFinnHub = `wss://ws.finnhub.io?token=${process.env.REACT_APP_FINNHUB_API_KEY}`

const socket = new WebSocket(wsFinnHub);

class MyPortfolio extends React.Component {
    state = {
        wsData: null,
    }

    componentDidMount = () => {
    // Connection opened -> Subscribe
        socket.addEventListener('open', function (event) {
        socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
        console.log('Connected to socket')
        });

        const result = this
    // Listen for messages
        socket.onmessage = e =>{
            const message = JSON.parse(e.data)
            if(message.data != undefined){
            result.setState({
                wsData: message.data[0].p
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

    // marketHour = () =>{
    //     const res = axios(`https://financialmodelingprep.com/api/v3/market-hours?apikey=process.env.REACT_APP_FMP_API_KEY`)
    //         .then(result =>
    //             { return console.log(result.data[0].isTheStockMarketOpen)
    //             })
    //         .catch(error => { console.error(error); return Promise.reject(error); });
    //     }



    render() {
        return (
        <div>
            {this.state.wsData!= null ? <h1>{this.state.wsData}</h1>: <h1>loading</h1> }
        </div>
        );
    }

}
export default MyPortfolio;


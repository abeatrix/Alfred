import React from "react";


const wsFinnHub = `wss://ws.finnhub.io?token=${process.env.REACT_APP_FINNHUB_API_KEY}`
// const polygon = `wss://socket.polygon.io/stocks`

const socket = new WebSocket(wsFinnHub);


class MyPortfolio extends React.Component {


    // componentDidMount = () => {
    // // Connection opened -> Subscribe
    //     socket.addEventListener('open', function (event) {
    //     socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
    //     console.log('hi')
    // });

    // // Listen for messages
    //     socket.addEventListener('message', function (event) {
    //     console.log('Message from server ', event.data);
    // });
    // }



    render() {
        return (
        <div>

            <h1>testing</h1>
        </div>
        );
    }

}
export default MyPortfolio;


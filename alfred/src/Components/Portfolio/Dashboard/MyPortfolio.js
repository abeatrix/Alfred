import React from "react";


const wsFinnHub = `wss://ws.finnhub.io?token=${process.env.REACT_APP_FINNHUB_API_KEY}`
// const polygon = `wss://socket.polygon.io/stocks`

const socket = new WebSocket(wsFinnHub);


class MyPortfolio extends React.Component {
    state = {
        wsData: null
    }
    componentDidMount = () => {
    // Connection opened -> Subscribe
        socket.addEventListener('open', function (event) {
        socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
        console.log('hi')
    });

    // Listen for messages
    socket.addEventListener('message', function (event) {
        if(event.data[4] === "p"){
            console.log(event.data)
            //
        }
        console.log('Message from server ', event);
        this.setState({wsData: JSON.parse(event)})
    });

    // try to reconnect if it got disconnected
    socket.addEventListener('message', function (event) {
        // console.log('Message from server ', event.data.type);
        console.log('Message from server ', "disconnected");
    });
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


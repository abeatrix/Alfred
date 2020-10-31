import React from 'react'
import HotIndexRow from './HotIndexRow'
import { Detector } from "react-detect-offline";
import {
  Card,
  Table,
  Spinner
} from "react-bootstrap";

const HotIndexList = (props) => {
  return (
    <Card style={{ margin: "5%" }}>
        <Card.Body>
          <Table responsive>
            <Card.Title> Hot Stock - <Detector render={({ online }) => (
              <span className={online ? "text-success" : "text-danger"}>
                {online ? <span>Live</span> : "Offline"}
              </span>
              )}/>
            </Card.Title>
            <Table responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>History</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(props.stocks).slice(0, 5).map((stock_name, i) =>
                  {
                    let current_stock = props.stocks[stock_name];
                    return (
                      <HotIndexRow
                        key={i} stock_name={stock_name}
                        data={current_stock}
                      />
                    )
                  }
                )}
                { props.isWsConencted() ? <tr><Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner></tr> : null }
              </tbody>
            </Table>
          </Table>
        </Card.Body>
      </Card>
  );
}

export default HotIndexList;

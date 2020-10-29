import {
  Card,
  Table,
} from "react-bootstrap"

export const HotStocks = (props) => {
  function displayResults(data){
    return (
      <Card style={{ margin: "5%" }}>
        <Card.Body>
          <Table responsive>
            <Card.Title>Popular Stocks</Card.Title>
            <Table responsive>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Last Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="mb-1 text-dark font-weight-medium">NFLX</p>
                    <small className="font-weight-medium">{data}</small>
                  </td>
                  <td className="font-weight-medium">$250.00</td>
                  <td className="text-success font-weight-medium">+12.64</td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-1 text-dark font-weight-medium">TSLA</p>
                    <small className="font-weight-medium">Tesla, Inc.</small>
                  </td>
                  <td className="font-weight-medium">$458.00</td>
                  <td className="text-danger font-weight-medium">-14.53</td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-1 text-dark font-weight-medium">GOOG</p>
                    <small className="font-weight-medium">Alphabet, Inc.</small>
                  </td>
                  <td className="font-weight-medium">$250.00</td>
                  <td className="text-danger font-weight-medium">+12.64</td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-1 text-dark font-weight-medium">AMZN</p>
                    <small className="font-weight-medium">Amazon.com, Inc.</small>
                  </td>
                  <td className="font-weight-medium">$546.00</td>
                  <td className="text-success font-weight-medium">+24.34</td>
                </tr>
              </tbody>
            </Table>
          </Table>
        </Card.Body>
      </Card>
    )
  }
  return(
    <div>
      {displayResults(props.data)}
    </div>
  )
};

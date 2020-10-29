import { render } from "@testing-library/react"
import {
  Card,
  Table,
} from "react-bootstrap";
import usePolygon from '../../../../hooks/userPolygon';
import HotIndexItem from './HotIndexItem';
import PolygonModel from '../../../../Model/PolygonModel';

export  const HotStocks = () => {

  const [polystock, setPolystock] = usePolygon('NFLX');

    return (
      <Card style={{ margin: "5%" }}>
        <Card.Body>
          <Table responsive>
            <Card.Title>Today's Market</Card.Title>
            <Table responsive>
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Last Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <HotIndexItem polystock={polystock} />
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


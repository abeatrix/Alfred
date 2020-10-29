import { render } from "@testing-library/react"
import {
  Card,
  Table,
} from "react-bootstrap";
import usePolygon from '../../../../hooks/userPolygon';
import HotIndexItem from './HotIndexItem';

export  const HotStocks = () => {

  const [polystock, setPolystock] = usePolygon('NFLX');
  const [polystock2, setPolystock2] = usePolygon('GOOG');
  const [polystock3, setPolystock3] = usePolygon('TSLA');
  const [polystock4, setPolystock4] = usePolygon('AMZN');

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
                <tr><HotIndexItem polystock={polystock} /></tr>
                <tr><HotIndexItem polystock={polystock2} /></tr>
                <tr></tr><HotIndexItem polystock={polystock3} />
                <tr></tr><HotIndexItem polystock={polystock4} />
              </tbody>
            </Table>
          </Table>
        </Card.Body>
      </Card>
    )
}


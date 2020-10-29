import { render } from "@testing-library/react"
import {
  Card,
  Table,
} from "react-bootstrap";
import useFinnhub from '../../../hooks/userFinnhub';
import NewsList from './NewsList';

export  const NewsSection = () => {

    const [finnNews, setFinnNews] = useFinnhub();

    return (

      <Card style={{ margin: "5%" }}>
        <Card.Body>
          <Table responsive>
            <Card.Title>Market News</Card.Title>
            <Table responsive>
                <thead>
                    <tr>
                        <th>category</th>
                        <th>headline</th>
                        <th>source</th>
                        <th>summary</th>
                    </tr>
                </thead>
              <tbody>

                    <NewsList news={finnNews} />

              </tbody>
            </Table>
          </Table>
        </Card.Body>
      </Card>
    )
}


import { Line, Bar, Radar } from 'react-chartjs-2';
import { ProgressBar, Dropdown, Card, Form, Button, Table } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast'
import SearchContainer from '../SearchContainer/SearchContainer'
import { PageContainer, PageWrapper, DashboardContainer, AddaStockBtn, PortfolioContainer, PortSideBarContainer, PortNotSideBarContainer, AddaStockBtnsWrapper } from './PortfolioElements';


const PortfolioPage = () => {
  const netGainData = {labels: ["Energy", "Materials", "Consumer", "Health Care", "Finance", "Technology"],
  datasets: [{
      data: [80, 10, 40, 30, 0, 90]
  }]}

  const netGainOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 100,
        stepSize: 20,
        display: false,
      },
      pointLabels: {
        fontSize: 14,
        fontColor: "#6c757c",
        color: "#f3f3f3",
        zeroLineColor: "#f3f3f3"
      },
      angleLines: {
        color: "#f3f3f3",
        zeroLineColor: "#f3f3f3",
      },
      gridLines: {
        color: "#f3f3f3",
        zeroLineColor: "#f3f3f3",
      }
    },
    legend: false,
  }

  return (
    <div>
      <PageContainer>
        <PageWrapper>
          <PortSideBarContainer>
          <Card style={{ margin: '5%' }}>
            <Card.Body>
                <Card.Title>Add a Stock</Card.Title>
                <Form>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Symbol</Form.Label>
                    <Form.Control type="text" name='symbol' placeholder="Ticker" />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Average Cost</Form.Label>
                    <Form.Control type="number" name='avgcost' placeholder="Cost per Share" />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" name='quantity' placeholder="Number of Shares" />
                  </Form.Group>
                  <AddaStockBtnsWrapper>
                    <AddaStockBtn><Button variant="danger">Sell</Button></AddaStockBtn>
                    <AddaStockBtn><Button variant="success">Buy</Button></AddaStockBtn>
                  </AddaStockBtnsWrapper>
                </Form>
            </Card.Body>
          </Card>

          <Card style={{ margin: '5%' }}>
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
                          <p className="mb-1 text-dark font-weight-medium">NFLX</p><small className="font-weight-medium">Netflix, Inc.</small>
                        </td>
                        <td className="font-weight-medium">$250.00</td>
                        <td className="text-success font-weight-medium">+12.64</td>
                      </tr>
                      <tr>
                        <td>
                          <p className="mb-1 text-dark font-weight-medium">TSLA</p><small className="font-weight-medium">Tesla, Inc.</small>
                        </td>
                        <td className="font-weight-medium">$458.00</td>
                        <td className="text-danger font-weight-medium">-14.53</td>
                      </tr>
                      <tr>
                        <td>
                          <p className="mb-1 text-dark font-weight-medium">GOOG</p><small className="font-weight-medium">Alphabet, Inc.</small>
                        </td>
                        <td className="font-weight-medium">$250.00</td>
                        <td  className="text-danger font-weight-medium">+12.64</td>
                      </tr>
                      <tr>
                        <td>
                          <p className="mb-1 text-dark font-weight-medium">AMZN</p><small className="font-weight-medium">Amazon.com, Inc.</small>
                        </td>
                        <td className="font-weight-medium">$546.00</td>
                        <td className="text-success font-weight-medium">+24.34</td>
                      </tr>
                    </tbody>
                    </Table>
                  </Table>
                </Card.Body>
              </Card>


                <Card style={{ margin: '5%' }}>
                  <Card.Body>
                  <Card.Title>Portfolio Diversity</Card.Title>
                <Radar data={netGainData} options={netGainOptions} height={280}/>
          </Card.Body>
          </Card>

          </PortSideBarContainer>




          <PortNotSideBarContainer>

            <DashboardContainer><SearchContainer></SearchContainer></DashboardContainer>
            <PortfolioContainer>


            </PortfolioContainer>
          </PortNotSideBarContainer>
        </PageWrapper>
      </PageContainer>

    </div>
  );

}

export default PortfolioPage;

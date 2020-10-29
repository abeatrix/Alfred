import React from "react";
import { Line, Bar, Radar } from 'react-chartjs-2';
import { ProgressBar, Dropdown, Card, Form, Button, Table } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast'
import SearchContainer from '../SearchContainer/SearchContainer'
import { PageContainer, PageWrapper, DashboardContainer, AddaStockBtn, PortfolioContainer, PortSideBarContainer, PortNotSideBarContainer, AddaStockBtnsWrapper } from './PortfolioElements';
import {netGainData, netGainOptions, hotStocksData} from './Data'
import {HotStocks} from './Components/HotStocks/index'
import {AddaStock} from './Components/AddStock'
import PolygonModel from '../../Model/PolygonModel';

// const PortfolioPage = () => {

class PortfolioPage extends React.Component {
  state = {
    query: '',
    searched: false,
    results: null,
  }

  componentDidUpdate(){
  }

  handleInput = (event) => {
      this.setState({
      query: event.target.value,
      searched: false,
      })
  }

  handleSubmit = (event) => {
      event.preventDefault();
      PolygonModel.search(this.state.query).then(response => {
          this.setState({
              searched: true,
              results: response.data
          })
      })
  }

  render() {
  return (
    <div>
      <PageContainer>
        <PageWrapper>
          <PortSideBarContainer>
          <AddaStock />
          <HotStocks data={this.state.hotStocksData}/>
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
}

export default PortfolioPage;

import React from "react";
import { Line, Bar, Radar } from 'react-chartjs-2';
import { ProgressBar, Dropdown, Card, Form, Button, Table } from 'react-bootstrap';
import SearchContainer from '../SearchContainer/SearchContainer'
import { PageContainer, PageWrapper, DashboardContainer, PortfolioContainer, PortSideBarContainer, PortNotSideBarContainer, AddaStockBtnsWrapper } from './PortfolioElements';
import {netGainData, netGainOptions, hotStocksData} from './Components/Data';
import {HotStocks} from './Components/HotStocks/index';
import {AddaStock} from './Components/AddStock'
import {usePolygon} from '../../hooks/userPolygon'

const PortfolioPage = () => {

  return (
    <div>
      <PageContainer>
        <PageWrapper>
          <PortSideBarContainer>
          <AddaStock />
          <HotStocks />
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

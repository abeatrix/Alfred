import React from "react";
import useShowPortDetail from '../../../hooks/useShowPortDetail'
import Spinner from 'react-bootstrap/Spinner'
import {PortfolioStockListRowItem} from './PortfolioStockListRowItem'

export const PortfolioStockListRow = (props) => {

  const [portfoliodetail, setPortfolioDetail] = useShowPortDetail(props.data);

  return (
    <>
       { portfoliodetail.data ?
        <tr>
          {(portfoliodetail.data.symbol) ? <td>{portfoliodetail.data.symbol}</td> : <td> <Spinner animation="border" variant="success" /></td>}
          {(portfoliodetail.data.quantity) ? <td>{portfoliodetail.data.quantity}</td> : <td> <Spinner animation="border" variant="success" /></td>}
          <PortfolioStockListRowItem data={portfoliodetail.data}/>
        </tr>
        : null}

    </>
  );

}

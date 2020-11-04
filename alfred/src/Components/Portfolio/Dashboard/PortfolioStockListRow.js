import React from "react";
import useShowPortDetail from '../../../hooks/useShowPortDetail'
import Spinner from 'react-bootstrap/Spinner'
import {PortfolioStockListRowItem} from './PortfolioStockListRowItem'
import { useRecoilState } from "recoil";
import {userPortState} from '../../../recoil/atoms'

export const PortfolioStockListRow = (props) => {
  // console.log(props)
  const [portfoliodetail, setPortfolioDetail] = useShowPortDetail(props.data);

  const portId = props.data._id

  return (
    <>
       { portfoliodetail.data ?
        <tr>
          {(portfoliodetail.data.symbol) ? <td>{portfoliodetail.data.symbol}</td> : <td> <Spinner animation="border" variant="success" /></td>}
          {(portfoliodetail.data.quantity) ? <td>{portfoliodetail.data.quantity}</td> : <td> <Spinner animation="border" variant="success" /></td>}
          <PortfolioStockListRowItem data={portfoliodetail.data} userId={props.userId} handleDelete={props.handleDelete} setPortfolioDetail={setPortfolioDetail} />
        </tr>
        : null}

    </>
  );

}

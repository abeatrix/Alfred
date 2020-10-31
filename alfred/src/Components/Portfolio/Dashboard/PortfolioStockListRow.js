import React from 'react'
import useShowPortDetail from '../../../hooks/useShowPortDetail'


export const PortfolioStockListRow = (props) => {

  const [portfoliodetail, setPortfolioDetail] = useShowPortDetail(props.data);
  console.log(portfoliodetail)

  return (

    <>
       {(portfoliodetail.data) ?
        <tr>
          <td>{portfoliodetail.data.symbol}</td>
          <td>{portfoliodetail.data.quantity}</td>
          <td>{portfoliodetail.data.avgcost}</td>
          <td>value</td>
          <td>return</td>
        </tr>
        : <h4>Loading</h4>}

    </>
  );

}

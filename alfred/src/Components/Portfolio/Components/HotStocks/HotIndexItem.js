import React from 'react';

const HotIndexItem = (props) => {
    const { symbol, companyName,latestPrice, change   } = props.polystock;
    return (
        <>
            <td>
                    <p className="mb-1 text-dark font-weight-medium">{symbol}</p>
                    <small className="font-weight-medium">{companyName}</small>
                  </td>
                  <td className="font-weight-medium">{latestPrice}</td>
                  <td className="text-success font-weight-medium">{change}</td>
        </>
    )
}

export default HotIndexItem;

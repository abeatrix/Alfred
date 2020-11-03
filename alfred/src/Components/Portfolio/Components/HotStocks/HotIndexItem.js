import React from 'react';

const HotIndexItem = (props) => {
    const { symbol, companyName,latestPrice } = props.polystock;
    const s = JSON.stringify(props.polystock.change)

    return (
        <>
            <td>
                    <p className="mb-1 text-dark font-weight-medium">{symbol}</p>
                    <small className="font-weight-medium">{companyName}</small>
                  </td>
                  <td className="font-weight-medium" >${latestPrice}</td>
                  <td className={ s >0 ? "text-success" : "text-danger"}> ${s} </td>
        </>
    )
}

export default HotIndexItem;

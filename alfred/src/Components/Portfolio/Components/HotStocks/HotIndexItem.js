import React from 'react';
import {Tooltip, OverlayTrigger} from "react-bootstrap";

const HotIndexItem = (props) => {
    const { symbol, companyName,latestPrice } = props.polystock;
    const s = JSON.stringify(props.polystock.change)

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}> {companyName} </Tooltip>
      );


    return (
        <>
            <td>
                <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                    <p className="mb-1 text-dark font-weight-medium">{symbol}</p>
                </OverlayTrigger>
            </td>
            <td className="font-weight-medium" >${latestPrice}</td>
            <td className={ s >0 ? "text-success" : "text-danger"}> ${s} </td>
        </>
    )
}

export default HotIndexItem;

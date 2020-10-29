import React from 'react'
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';

class PortfolioStockListRow extends React.Component {

  render() {
    return (
      <tr >
        <td>{this.props.stock_name.toUpperCase()}</td>
        <td className={(this.props.current_value > this.props.data.stats.slice(-2)[0].value) ? "text-success" : "text-danger"}>
          {this.props.data.current_value.toFixed(2)}
        </td>
        <td>
          <Sparklines data={(this.props.data.stats).map((stats) => { return stats.value})}>
            <SparklinesLine color="green" />
            {/* <SparklinesBars color="green" /> */}
          </Sparklines>
        </td>
      </tr>
    );
  }
}

export default PortfolioStockListRow;

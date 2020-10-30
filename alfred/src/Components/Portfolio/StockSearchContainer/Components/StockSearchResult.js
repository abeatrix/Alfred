import { ProgressBar, Dropdown, Card, Form, Button, Table } from 'react-bootstrap';

const StockSearchResult = (props) => {
    function displayStockResults(data){
        // console.log(data.data.response.quoteResponse.result)
        return (
            <Card body>{data.companyName}{data.latestPrice}</Card>
        )
    }
    return(
        <div class="card-columns">
            {displayStockResults(props.data)}
        </div>
    )
}


export default StockSearchResult;

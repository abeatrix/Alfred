import { Card} from 'react-bootstrap';

const StockSearchResult = (props) => {
    function displayStockResults(data){
        // console.log(data.data.response.quoteResponse.result)
        return (
            <Card body>{data.companyName}{data.latestPrice}</Card>
        )
    }
    return(
        <div className="card-columns">
            {displayStockResults(props.data)}
        </div>
    )
}


export default StockSearchResult;

import { ProgressBar, Dropdown, Card, Form, Button, Table } from 'react-bootstrap';

const Results = (props) => {
    function displayResults(data){
        // console.log(data.data.response.quoteResponse.result)
        return (
            <Card body>{data.companyName}{data.latestPrice}</Card>
        )
    }
    return(
        <div class="card-columns">
            {displayResults(props.data)}
        </div>
    )
}


export default Results;

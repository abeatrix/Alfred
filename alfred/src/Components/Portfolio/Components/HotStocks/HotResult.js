import { Card, Form, Button, Table } from 'react-bootstrap';

const HotResults = (props) => {
    function displayResults(data){
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


export default HotResults;

import React from 'react';
// import Result from './Result'

const Results = (props) => {
    function displayResults(data){
        // console.log(data.data.response.quoteResponse.result)
        return (
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">{data.companyName}</h5>
                <p class="card-text">{data.latestPrice}</p>
                </div>
                </div>
        )
    }
    return(
        <div class="card-columns">
            {displayResults(props.data)}
        </div>
    )
}


export default Results;

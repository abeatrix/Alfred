import React from 'react';
import { Card } from 'react-bootstrap';
import { Radar } from 'react-chartjs-2';
import {netGainData, netGainOptions} from '../../Components/Data';

class PortfolioDiversity extends React.Component {

    render() {
        return (
        <>
            <Card style={{ margin: '5%' }}>
                            <Card.Body>
                            <Card.Title>Portfolio Diversity</Card.Title>
                        <Radar data={netGainData} options={netGainOptions} height={280}/>
                    </Card.Body>
                    </Card>
        </>
        );
    }
}

export default PortfolioDiversity;

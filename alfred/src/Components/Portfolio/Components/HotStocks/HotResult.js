import React from 'react';
import HotIndexItem from './HotIndexItem';


const HotResults = (props) => {
    function generateHotItem(polystocks) {
        return polystocks.map(polystock => {
            return <HotIndexItem key={'APPL'} polystock={polystock} />
        })
    }

    return (
        <tr>
            {generateHotItem(props.data)}
        </tr>
    )
}

export default HotResults;

import React from 'react';
import NewsListRow from './NewsListRow';


const NewsList = (props) => {

    function generateNewsItem(finnNews) {
        return finnNews.slice(0, 5).map((finnNew, i )=> {
            return (
                <tr><NewsListRow key={i} finnNew={finnNew} /></tr>
            )
        })
    }

    return (
        <>
            {generateNewsItem(props.news)}
        </>
    )
}

export default NewsList;

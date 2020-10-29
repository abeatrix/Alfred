import React from 'react';
import NewsListRow from './NewsListRow';


const NewsList = (props) => {

    function generateNewsItem(finnNews) {
        return finnNews.slice(0, 5).map(finnNew => {
            return (
                <tr><NewsListRow finnNew={finnNew} /></tr>
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

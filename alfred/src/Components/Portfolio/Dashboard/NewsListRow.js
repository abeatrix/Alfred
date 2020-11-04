import React from 'react'

const NewsListRow = (props) => {
    // console.log(props)
    const { category, headline, source, summary, url } = props.finnNew;

        return (
            <tr>
                <td>{category}</td>
                <td >{headline}</td>
                <td><small>{summary}</small></td>
                <td><a href={url}>{source}</a></td>
            </tr>
        );
}

export default NewsListRow;

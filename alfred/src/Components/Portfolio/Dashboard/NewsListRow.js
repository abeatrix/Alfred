import React from 'react'

const NewsListRow = (props) => {

    const { category, headline,source, summary } = props.finnNew;

        return (
            <>
                <td>{category}</td>
                <td >{headline}</td>
                <td>{source}</td>
                <td>{summary}</td>
            </>
        );
}

export default NewsListRow;

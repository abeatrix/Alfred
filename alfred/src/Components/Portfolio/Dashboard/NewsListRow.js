import React from 'react'

const NewsListRow = (props) => {
    // console.log(props)
    const { category, headline,source, summary } = props.finnNew;

        return (
            <>
                <td>{category}</td>
                <td >{headline}</td>
                <td>{source}</td>
                <td><small>{summary}</small></td>
            </>
        );
}

export default NewsListRow;

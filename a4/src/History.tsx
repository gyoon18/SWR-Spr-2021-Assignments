import React from 'react';

type Props = {
    asked: 
        { readonly question: string, 
        readonly answer: string }[]
}

const History = ({asked} :Props) => {
    return(
        <div className = "history">
            <h4>Q/A History</h4>
            {asked.map((asked,a) =>
            <div key = {a}>
                <p>Q: {asked.question}</p>
                <p>A: {asked.answer}</p>
                </div>
                )}
        </div>
            )
    };

export default History;
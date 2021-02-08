import React from 'react';

type Props = {
    readonly searchQuery: string,
    readonly friends: string[]
}

const Filtered = ({searchQuery, friends}: Props) => {
    //ignore capitals
    const results = friends.filter(name =>
        name.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return (
        <div className = "filtered">
            {results.length === 0 ? <p>No friends found</p> : <div className = "results">
                        <ul>
                            {results.map((name, tag) =>
                                <li key = {tag}>{name}</li>)}
                        </ul>
                    </div>
            }
        </div>
    );
}

export default Filtered;
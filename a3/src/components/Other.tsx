import React from 'react';

type Props = {
    readonly searchQuery: string,
    readonly friends: string[]
}

const Other = ({searchQuery, friends}: Props) => {
    //ignore capitals
    const otherList = friends.filter(name =>
        !name.toLowerCase().includes(searchQuery.toLowerCase()))
    
    return (
        <div className = "other">
            {otherList.length === 0 ? <p>No friends found</p> : <div className = "otherList">
                        <ul>
                            {otherList.map((name, tag) => 
                                <li key = {tag}>{name}</li>)}
                        </ul>
                    </div>
            }
        </div>
    );
}

export default Other;
import React from "react";

type Props = {
    readonly info: {
        readonly title: string;
        readonly artist: string;
    };
}

const Song = ({info}: Props) => {
    return (
        <div>
            {info.title} by {info.artist}
        </div>
    );
}

export default Song;
import React, { useEffect, useState } from "react";

function Phrases() {
    const [phrases, setPhrases] = useState();

    useEffect(() => {
        fetch('https://phrases-sks.web.app/phrases')
        .then((response) => response.json())
        .then((data) => setPhrases(data))
        .catch(console.error);
    }, [phrases]);

    console.log({ phrases });

    return(
        <>
        <h1>Add your phrase</h1>
        {!phrases 
        ? (<h2>Loading...</h2>)
        : ( <> 
        <h2>Phrases</h2>
        {phrases.map((phrase) => {
            return <p key={phrase.id}>{phrase.word}, {phrase.translation}</p>
        })}
        </>
        )}
        </>
    )
}

export default Phrases;
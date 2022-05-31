
import React, { useState } from "react";

const AddPhrase = () => {
    const [newPhrase, setNewPhrase] = useState('');
    const handleSubmit = () => {
        fetch('https://phrases-sks.web.app/phrases', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newPhrase),

        })
            .then(() => setNewPhrase(''))
            .catch(console.error)
    }

    // const handleChange = (e) => {
    //     newValue = e.target.value
    //     setNewPhrase({
    //         ...newPhrase,
    //         [e.target.word]: newValue
    //     });
    // }

    return (
        <form onSubmit={handleSubmit} >
            <label>
                Another Phrase:
                <input name="word" type="text" value={newPhrase.word} />
                <input name="word" type="text" value={newPhrase.translation} />
            </label>
            <br />
        </form>
    )
};

export default AddPhrase;


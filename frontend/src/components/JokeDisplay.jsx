import React, { useState } from 'react';
import axios from 'axios';

function JokeTeller() {
    const [joke, setJoke] = useState('Your Joke Will Be Here');
    const [input, setInput] = useState('');
    const fetchJoke = async () => {
        if(input === ""){
            return;
        }
        setJoke("Lodging ...");
        const response = await axios(`${process.env.REACT_APP_URL}/ask?que=${input}`);
        //console.log(response);
        setJoke(response.data);

    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-lg w-full p-4 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-semibold mb-4 text-center text-gray-800">Joke App with AI</h1>
            <input
            id="genre"
            type="text"
            className="mb-4 w-full border rounded py-2 px-3 text-gray-700 focus:outline-none"
            value={input}
            onChange={(e)=>{setInput(e.target.value);}}
            placeholder="Whom do you want listen joke today"
        />
            <button
            className="px-4 py-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            onClick={fetchJoke}
            >
            Tell Joke
            </button>
            <p className="text-center text-gray-600 mb-4 mt-6">{joke}</p>
        </div>
        </div>
    );
}

export default JokeTeller;

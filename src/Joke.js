import facade from "./apiFacade.js";
import React, { useState } from "react";
function Joke() {
  let obj = {
    joke: "",
    id: "",
  };

  const [dataFromServer, setDataFromServer] = useState(obj);

  const handleSubmitFind = (event) => {
    event.preventDefault();
    facade.fetchJoke().then((data) => setDataFromServer(data));
  };

  const handleSubmitStore = (event) => {
    event.preventDefault();
    facade.storeJoke().then(setDataFromServer(""));
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmitFind}>
          <h2>Joke fetched:</h2>
          <p>Joke: {dataFromServer.joke}</p>
          <h3>Press the button below to fetch joke</h3>

          <input type="submit" value="Fetch" />
        </form>
      </div>
      <div>
        <form onSubmit={handleSubmitStore}>
          <h2>Store the joke</h2>
          <p>
            If you want to store the joke fetched above, <br />
            click the button below to store it in the database
          </p>
          <input type="submit" value="Store" />
        </form>
      </div>
    </div>
  );
}

export default Joke;

import React, { useState } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function App() {
  const [data, setData] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (event) => {
    fetch("/prompt", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // data can be any object or array
    })
    .then(response => response.json()) // parse JSON from request
    .then(result => {
      setResult({value: result.value})
      console.log(result);
    })
    .catch(error => {
      // handle error
      console.error(error);
    });

    // fetch("/prompt",{
    //   method: "GET",
    //   headers: { 'Content-Type': 'application/json' }
    // }).then(response => response.json())
    // .then(result => setData({ value: result.value }))

    console.log(data);
  };

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div className="App">
      <TextField
        id="standard-basic"
        label="Type your prompt to generate"
        value={data.value}
        onChange={handleChange}
        //handle click enter to generate
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            handleClick();
            ev.preventDefault();
          }
        }}
      />

      {/* handle click button to generate */}
      <Button variant="contained" color="primary" onClick={handleClick}>
        Submit
      </Button>

      {typeof data === "undefined" ? <p>Loading...</p> : <p>{result.value}</p>}
    </div>
  );
}

export default App;

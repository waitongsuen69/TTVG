import React, { useState } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function App() {
  const [data, setData] = useState({value:""});

  const handleClick = (event) => {
    // fetch("/prompt", {
    //   method: "POST",
    //   body: {
    //     prompt: data.value,
    //   }
    // });

    fetch("/prompt",{
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
    .then(result => setData({ data: result.value }))

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

      {typeof data === "undefined" ? <p>Loading...</p> : <p>{data.value}</p>}
      {/* <p>you type: {data1}</p> */}
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import './App.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function App() {

  const [data1, setData1] = useState('')
  const [data, setData] = useState([{}])


  const handleClick = (event) => {
    console.log(data1)
    fetch("/members").then(
      {
        method: 'POST', 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({data1}),
    }).then(
      //result to json
      res => res.json()
    ).then(
      //write data back
      data => {
        setData(data)
        console.log(data)
      }
    )
  }

  const handleChange = (event) => {
    setData1(event.target.value)
  }

  return (
    <div className="App">
      <TextField
        id="standard-basic"
        label="Type your prompt to generate"
        value={data1}
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

      {(typeof data === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        <p>{data.value}</p>
      )
      }
      {/* <p>you type: {data1}</p> */}
    </div>
  );
}

export default App;
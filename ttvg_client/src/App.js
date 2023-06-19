import React, { useState } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function App() {
  const [data, setData] = useState("");


  // const handleIMGClick = (event) => {
  //   fetch("/output_image",{
  //     method: 'GET',
      
  //   })
  // };

  // when click, send `data` to server/user_input and get output, then write output to `result`
  function handleClick (event){
    fetch("/user_intput",{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data) // return data from server in json type back to string
    }).then(response => response.json())
    .then(result => {
      //create element of image
      const img = document.createElement('img');
      img.src = 'data:image/png;base64,' + result.image;
      document.body.appendChild(img);
    })
    .catch(error => {
      // handle error
      console.error(error);
    });
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

      {typeof data === "undefined" ? <p>Loading...</p> : <p>Done!</p>}
      
    </div>
  );
}

export default App;



// const handleClick = (event) => {
//   fetch("/prompt", {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data) // data can be any object or array
//   })
//   .then(response => response.json()) // parse JSON from request
//   .then(result => {
//     setResult({value: result.value})
//     console.log(result);
//   })
//   .catch(error => {
//     // handle error
//     console.error(error);
//   });

//   fetch("/prompt",{
//     method: "GET",
//     headers: { 'Content-Type': 'application/json' }
//   }).then(response => response.json())
//   .then(result => setData({ value: result.value }))
// };
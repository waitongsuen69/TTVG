import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


function Text2Image(){
    const [generateLoad, setGenerateLoad] = useState(false);
    const [data, setData] = useState("");
  
    // when click, send `data` to server/user_input and get output, then write output to `result`
    async function handleGenerate (event){
      setGenerateLoad(true);
  
      await fetch("/user_intput",{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data) // return data from server in json type back to string
      }).then(response => response.json())
      .then(result => {
        //create element of image
        setGenerateLoad(false);
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
              handleGenerate();
              ev.preventDefault();
            }
          }}
        />
        {/* handle click button to generate */}
        <Button variant="contained" color="primary" onClick={handleGenerate}>
          Submit
        </Button>
         {generateLoad ? (<p className="fullscreen">loading ...</p>):(<p>Nothing loading ...</p>)}
        
      </div>
    );
}

export default Text2Image;
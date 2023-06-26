import React from "react";
import "./Layout.css";
import { Button, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Layout = () => (
  <div className="Layout">
    <div className="my_header">
      <h1>ANIMAL ANIMATION VIDEO</h1>
      <p>ANIMATION</p>
    </div>

    {/* prompt_to_story */}
    <div className="prompt_to_story">
      <textarea
        rows="5"
        placeholder="Tell me what do you want to do..."
      ></textarea>
      <Button
        sx={{
          width: "100%",
          borderRadius: "5px",
          border: "none",
          bgcolor: "#000000",
          color: "#DADADB",
          padding: "20px",
          fontSize: "1.2rem",
          fontWeight: 500,
        }}
      >
        Generate story 🤖
      </Button>
    </div>

    <IconButton
      sx={{ color: "white" }}
      aria-label="scroll down"
      onClick={() =>
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      }
    >
      <KeyboardArrowDownIcon />
    </IconButton>

    {/* story_to_iamge */}
    <div className="story_to_image">
      <h1>Story check, hit button to generate image</h1>
      <textarea
        rows="5"
        placeholder="Generated Story will show here"
      ></textarea>
      <Button
        sx={{
          width: "100%",
          borderRadius: "5px",
          border: "none",
          bgcolor: "#000000",
          color: "#DADADB",
          padding: "20px",
          fontSize: "1.2rem",
          fontWeight: 500,
        }}
      >
        Generate image 🤖
      </Button>
    </div>

    <IconButton
      sx={{ color: "white" }}
      aria-label="scroll down"
      onClick={() =>
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      }
    >
        <KeyboardArrowDownIcon />
    </IconButton>

    {/* mask */}
    {/* masked_image to video */}
  </div>
);

export default Layout;

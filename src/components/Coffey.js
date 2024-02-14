import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Button } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';
import Sidebar from "./sidebar";

export default function Coffey() {
  const [inputText, setInputText] = useState("");
  const [highlightedText, setHighlightedText] = useState("");

  // Callback function to update highlighted text
  const handleHighlightUpdate = (html) => {
    setHighlightedText(html);
  };

  return (
    <div className="container-fluid">
      <h1 className="coffey text-left">
        <Link className="text-black" to="/">
          Coffey
        </Link>
      </h1>
      <div className="row m-auto">
        <div className="col-12 col-md-4 col-lg-4 m-auto custom-forms">
          <div
            className="inputText"
            id="output"
            style={{ marginTop: "31px" }}
            dangerouslySetInnerHTML={{ __html: highlightedText }}
          />
          <textarea
            cols="18"
            rows="8"
            className="form-control"
            placeholder="Type here..."
            id="text-area"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
      </div>
      <Sidebar
        inputText={inputText}
        onHighlightUpdate={handleHighlightUpdate}
      />
    </div>
  );
}

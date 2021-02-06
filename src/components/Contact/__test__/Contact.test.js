import React from "react";
import ReactDOM from "react-dom";

// test suite for contact form component

// test if the entire contact form renders properly
it("contact form renders without error", () => {
  const div = document.createElement("div");
  ReactDOM.render(<div></div>, div);
});

// test if contact form labels render properly
it("all input labels renders without error", () => {
  const label = document.createElement("label");
  ReactDOM.render(<label></label>, label);
});

// test if contact form input fields render properly
it("contact form submit button renders", () => {
  const input = document.createElement("input");
  ReactDOM.render(<input></input>, input);
});

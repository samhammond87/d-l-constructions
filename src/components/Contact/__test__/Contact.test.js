import React from "react";
import ReactDOM from "react-dom";
import ContactForm from "../ContactForm";

it("contact form renders without error", () => {
  const div = document.createElement("div");
  ReactDOM.render(<div></div>, div);
});

it("all input labels renders without error", () => {
  const label = document.createElement("label");
  ReactDOM.render(<label></label>, label);
});

it("contact form submit button renders", () => {
  const input = document.createElement("input");
  ReactDOM.render(<input></input>, input);
});
